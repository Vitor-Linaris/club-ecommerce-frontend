import { combineReducers } from 'redux'
import userReducer from './reducers/user/user.reducer'
import cartReducer from './toolkit/cart/cart.slice'
import categoryReducer from './reducers/category/category.reducer'

const rootReducer = combineReducers({
  cartReducer,
  userReducer,
  categoryReducer
})

export default rootReducer
