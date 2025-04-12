import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUserCart:null
}

export const currentUsersCart = createSlice({
    name:"currentUserCart",
    initialState,
    reducers:{
        userCart : (state, action) =>{
            state.currentUserCart = action.payload
        }
    }
})

export const {userCart} = currentUsersCart.actions;
export default currentUsersCart.reducer;