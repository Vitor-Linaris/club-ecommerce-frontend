import { FunctionComponent, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'
import { useDispatch } from 'react-redux'

// Components
import Header from '../../components/header/header.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { clearCartProducts } from '../../store/reducers/cart/cart.actions'

// Styles
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './payment-confirmation.styles'

// Utilities
import Colors from '../../theme/theme.colors'

const PaymentConfirmation: FunctionComponent = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const status = searchParams.get('success')
  const isCanceled = searchParams.get('canceled') === 'true'

  const handleGoToHomePageClick = () => {
    navigate('/')
  }

  useEffect(() => {
    if (status === 'true') {
      dispatch(clearCartProducts())
    }
  }, [status])

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Sua compra foi finalizada com sucesso!</p>
            </>
          )}

          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>
                Ocorreu um erro ao finalizar sua compra. Por favor, tente
                novamente
              </p>
            </>
          )}

          <CustomButton
            startIcon={<AiOutlineHome />}
            onClick={handleGoToHomePageClick}>
            Ir para Página Inicial
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmation
