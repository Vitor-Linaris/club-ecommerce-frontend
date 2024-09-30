import { FunctionComponent } from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

// Utilities
import CartProduct from '../../types/cart.types'
import {
  decreaseCartProductQuantity,
  removeProductFromCart,
  increaseCartProductQuantity
} from '../../store/toolkit/cart/cart.slice'

// Styles
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart-item.styles'

interface CartItemProps {
  product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id))
  }

  const handleIncreaseClick = () => {
    dispatch(increaseCartProductQuantity(product.id))
  }

  const handleDecreaseClick = () => {
    dispatch(decreaseCartProductQuantity(product.id))
  }

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25} aria-label={`Remove ${product.name}`} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
