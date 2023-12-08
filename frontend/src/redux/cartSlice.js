import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthAxios from "../helpers/request";

//! Display all products in the cart
export const getAllProductToCart = createAsyncThunk('carts/getAllProductToCart' , async ( rejectWithValue ) => {
    return AuthAxios.get('http://localhost:4000/v1/cart')
    .then(response => response)
    .catch(error => rejectWithValue(error))
});

//! Delete product from cart
export const deleteProductFromCart = createAsyncThunk('carts/deleteProductFromCart' , async ( id , { rejectWithValue } ) => {
    return AuthAxios.delete(`http://localhost:4000/v1/cart/delete/${id}`)
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

        //! Delete product from cart
        .addCase(deleteProductFromCart.fulfilled , ( state , action ) => {
            // console.log(action.payload)
            state.cart = state.cart.filter(product => product._id != action.payload.data.id) ;
            state.status = 'fulfilled' ;
        })
        .addCase(deleteProductFromCart.rejected , ( state , action ) => {
            state.error = action.payload ;
            state.status = 'rejected' ;
        })
        .addCase(deleteProductFromCart.pending , ( state , action ) => {
            state.status = 'pending' ;
        })
    }

}) ;

export default cartSlice.reducer ;
