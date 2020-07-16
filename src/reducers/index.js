import {combineReducers} from 'redux'
import CartProduct from './productCart'
import ReviewProduct from './reviewProduct'
const myReducer = combineReducers({
    CartProduct,
    ReviewProduct
})
export default myReducer