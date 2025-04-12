import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import deliveryReducer from './DeliveryInfo';
import cartReducer from "./CartSlice"
import currentCartReducer from "./CurrentUserCart"

const rootReducer = combineReducers({
  user: userReducer,
  delivery: deliveryReducer,
  cart: cartReducer,
  currentCart: currentCartReducer
});

export default rootReducer;
