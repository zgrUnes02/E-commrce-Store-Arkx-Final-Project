import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthAxios from "../helpers/request";

export const getAllProductToCart = createAsyncThunk('carts/getAllProductToCart' , async ( rejectWithValue ) => {
    return AuthAxios.get('http://localhost:4000/v1/cart')
    .then(response => response)
    .catch(error => rejectWithValue(error))
});

const cartSlice = createSlice({
    name : 'carts' ,

    initialState : {
        cart : [],
        status : '',
        error : '' ,
    } ,

    reducers : {} , 

    extraReducers: ( builder ) => {
        builder

        //! Get all products to show it in cart
        .addCase(getAllProductToCart.fulfilled , ( state , action ) => {
            state.cart = action.payload.data ;
            state.status = 'fulfilled' ;
        })
        .addCase(getAllProductToCart.rejected , ( state , action ) => {
            state.error = action.payload ;
            state.status = 'rejected' ;
        })
        .addCase(getAllProductToCart.pending , ( state , action ) => {
            state.status = 'pending' ;
        })
    }

}) ;

export default cartSlice.reducer ;
