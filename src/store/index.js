import { createStore, combineReducers } from 'redux'
import cartItems from "/src/reducer/cartItems";


let store;
export default store = createStore(cartItems)
