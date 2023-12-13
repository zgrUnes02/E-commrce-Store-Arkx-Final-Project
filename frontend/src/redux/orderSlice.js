import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" ;
import AuthAxios from '../helpers/request' ;

//! Get all orders
export const getAllOrders = createAsyncThunk('orders/getAllOrders' , async () => {
    return AuthAxios.get('http://localhost:4000/v1/orders')
    .then(response => response.data.docs)
    .catch(error => console.log(error)) ;
});

//! Create service order 
export const createServiceOrder = createAsyncThunk('orders/createServicesOrder' , async (orderService , { rejectWithValue }) => {
    return AuthAxios.post('http://localhost:4000/v1/new/service/order' , orderService)
    .then(response => response)
    .catch(error => rejectWithValue(error)) ;
});

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

        //! Create service order
        .addCase(createServiceOrder.fulfilled , (state , action) => {
            state.orders = action.payload ;
            state.status = 'fulfilled' ;
        })
        .addCase(createServiceOrder.rejected , (state , action) => {
            state.status = 'rejected' ;
            state.error = action.payload ;
        })
        .addCase(createServiceOrder.pending , (state , action) => {
            state.status = 'pending' ;
        })
    }
}) ;

export default orderSlice.reducer ;
