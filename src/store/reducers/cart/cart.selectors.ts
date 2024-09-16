import { RootState } from '../../store'

export const selectProdductsTotalPrice = (state: RootState) => {
  return state.cartReducer.products.reduce((acc, currentProduct) => {
    return acc + currentProduct.price * currentProduct.quantity
  }, 0)
}

export const selectProductsCount = (state: RootState) => {
  return state.cartReducer.products.reduce((acc, currentProducts) => {
    return acc + currentProducts.quantity
  }, 0)
}
