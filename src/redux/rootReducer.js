import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import deliveryReducer from './DeliveryInfo';
import cartReducer from "./CartSlice"
import currentCartReducer from "./CurrentUserCart"
import wishlistReducer from "./wishlistSlice"

const rootReducer = combineReducers({
  user: userReducer,
  delivery: deliveryReducer,
  cart: cartReducer,
  currentCart: currentCartReducer,
  wishlist:wishlistReducer
});

export default rootReducer;
