import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistItems: [],
    quantity:0
}

export const wishlistSlice = createSlice({
    name:'favouser wishlist',
    initialState,
    reducers:{
        wishlistItems: (state, action) =>{
            state.quantity += 1;
            state.wishlistItems = action.payload.products
        },
        setWishlistFromDB: (state, action)=>{
            state.wishlistItems = action.payload?.products;
            state.quantity = action.payload?.products.length;
        },
        removeFromWishList:(state, action) =>{
            const idToRemove = action.payload.id;
            const itemToRemove = state.wishlistItems.find(item => item._id !== idToRemove)

            if(itemToRemove){
                state.wishlistItems = state?.wishlistItems.filter(item => item._id !== itemToRemove);
                state.quantity -= 1;
            }
        }
    }
})


export const {wishlistItems, setWishlistFromDB, removeFromWishList} = wishlistSlice.actions;
export default wishlistSlice.reducer