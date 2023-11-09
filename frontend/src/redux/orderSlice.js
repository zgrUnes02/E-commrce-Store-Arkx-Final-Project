import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" ;
import AuthAxios from '../helpers/request' ;


export const getAllOrders = createAsyncThunk('orders/getAllOrders' , async () => {
    return AuthAxios.get('http://localhost:4000/v1/orders')
    .then(response => response.data.docs)
    .catch(error => console.log(error)) ;
})

const orderSlice = createSlice({
    name : 'orders' ,

    initialState : {
        orders : [] ,
        status : '' ,
        error : '' ,
    } ,

    reducers : {} ,

    extraReducers : ( builder ) => {
        builder 

        //! Get all orders
        .addCase(getAllOrders.fulfilled , (state , action) => {
            state.orders = action.payload ;
            state.status = 'fulfilled' ;
        })
        .addCase(getAllOrders.rejected , (state , action) => {
            state.status = 'rejected' ;
            state.error = action.payload ;
        })
        .addCase(getAllOrders.pending , (state , action) => {
            state.status = 'pending' ;
        })
    }
}) ;

export default orderSlice.reducer ;
