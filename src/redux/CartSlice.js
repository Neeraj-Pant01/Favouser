import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    quantity: 0,
    total: 0
}

export const cartSlice = createSlice({
    name: "favouser cart",
    initialState,
    reducers: {
        items: (state, action) => {
            state.quantity += 1;
            state.cartItems = action.payload.products;
            state.total += action.payload.price;
        },
        setCartFromDB: (state, action) => {
            state.cartItems = action.payload?.products;
            state.quantity = action.payload?.products.length;
            state.total = action.payload?.products.reduce((acc, item) => acc + item?.price, 0);
        },
        removeFromCart: (state, action) => {
            const idToRemove = action.payload.id;
            const itemToRemove = state.cartItems.find(item => item.id === idToRemove);
            
            if (itemToRemove) {
                state.cartItems = state.cartItems.filter(item => item.id !== idToRemove);
                state.quantity -= 1;
                state.total -= itemToRemove.price;
            }
        }
    }
})

export const { items, setCartFromDB, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
