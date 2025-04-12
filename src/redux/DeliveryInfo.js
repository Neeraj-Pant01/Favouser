import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userAddress:null
}

export const DeliveryInfo = createSlice({
    name:"favouser deliveyDetail",
    initialState,
    reducers:{
        address: (state, action)=>{
            state.userAddress = action.payload
        }
    }
})

export const {address} = DeliveryInfo.actions;
export default DeliveryInfo.reducer;