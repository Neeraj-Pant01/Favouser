import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    quantity:0,
    total:0
}

export const cartSlice = createSlice({
    name: "favouser cart",
    initialState,
    reducers:{
        items : (state, action) =>{
            state.quantity += 1,
            state.cartItems.push(action.payload);
            state.total += action.payload.price
        }
    }
})

export const {items} = cartSlice.actions;
export default cartSlice.reducer; 