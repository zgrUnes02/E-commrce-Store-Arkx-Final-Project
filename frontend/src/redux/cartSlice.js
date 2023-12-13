import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthAxios from "../helpers/request";

//! Display all products in the cart
export const getAllProductToCart = createAsyncThunk('carts/getAllProductToCart' , async ( rejectWithValue ) => {
    return AuthAxios.get('http://localhost:4000/v1/cart')
    .then(response => response)
    .catch(error => rejectWithValue(error))
});

//! Increase product quantity
export const increaseProductQuantity = createAsyncThunk('carts/increaseProductQuantity' , async ( id , { rejectWithValue }) => {
    return AuthAxios.post(`http://localhost:4000/v1/cart/increase/${id}`)
    .then(response => response.data)
    .catch(error => rejectWithValue(error)) ;
});

//! decrease product quantity
export const decreaseProductQuantity = createAsyncThunk('carts/decreaseProductQuantity' , async ( id , { rejectWithValue }) => {
    return AuthAxios.post(`http://localhost:4000/v1/cart/decrease/${id}`)
    .then(response => response.data)
    .catch(error => rejectWithValue(error)) ;
});

//! Delete product from cart
export const deleteProductFromCart = createAsyncThunk('carts/deleteProductFromCart' , async ( id , { rejectWithValue } ) => {
    return AuthAxios.delete(`http://localhost:4000/v1/cart/delete/${id}`)
    .then(response => response)
    .catch(error => rejectWithValue(error))
});

//! Checkout
export const checkout = createAsyncThunk('carts/orders' , async ( id , { rejectWithValue } ) => {
    return AuthAxios.post(`http://localhost:4000/v1/new/order`)
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

        //! Increase the product value
        .addCase(increaseProductQuantity.fulfilled , (state , action) => {
            state.status = 'fulfilled' ;
            const index = state.cart.findIndex(cart => cart._id === action.payload._id) ;
            state.cart[index].quantity = action.payload.quantity ;
        })
        .addCase(increaseProductQuantity.rejected , (state , action) => {
            state.status = 'rejected' ;
            state.error = action.payload ;
        })
        .addCase(increaseProductQuantity.pending , (state , action) => {
            state.status = 'pending' ;
        })

        //! Decrease the product value
        .addCase(decreaseProductQuantity.fulfilled , (state , action) => {
            state.status = 'fulfilled' ;
            const index = state.cart.findIndex(cart => cart._id === action.payload._id) ;
            state.cart[index].quantity = action.payload.quantity ;
        })
        .addCase(decreaseProductQuantity.rejected , (state , action) => {
            state.status = 'rejected' ;
            state.error = action.payload ;
        })
        .addCase(decreaseProductQuantity.pending , (state , action) => {
            state.status = 'pending' ;
        })

        //! Delete product from cart
        .addCase(deleteProductFromCart.fulfilled , ( state , action ) => {
            state.cart = state.cart.filter(product => product._id !== action.payload.data.id) ;
            state.status = 'fulfilled' ;
        })
        .addCase(deleteProductFromCart.rejected , ( state , action ) => {
            state.error = action.payload ;
            state.status = 'rejected' ;
        })
        .addCase(deleteProductFromCart.pending , ( state , action ) => {
            state.status = 'pending' ;
        })

        //! Checkout
        .addCase(checkout.fulfilled , ( state , action ) => {
            state.status = 'fulfilled' ;
        })
        .addCase(checkout.rejected , ( state , action ) => {
            state.error = action.payload ;
            state.status = 'rejected' ;
        })
        .addCase(checkout.pending , ( state , action ) => {
            state.status = 'pending' ;
        })
    }

}) ;

export default cartSlice.reducer ;
