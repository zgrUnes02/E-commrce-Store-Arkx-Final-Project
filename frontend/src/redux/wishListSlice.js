import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthAxios from "../helpers/request";

//! Get all wish list products
export const getAllWishListProducts = createAsyncThunk('wishList/getAllWishListProducts' , async ( rejectWithValue ) => {
    return AuthAxios.get('http://localhost:4000/v1/wish-list')
    .then(response => response.data)
    .catch(error => rejectWithValue(error)) ;
}) ;

//! Add product to wish list
export const addProductToWishList = createAsyncThunk('wishList/addProductToWishList' , async ( id , { rejectWithValue } ) => {
    return AuthAxios.post(`http://localhost:4000/v1/wish/list/add/${id}`)
    .then(response => response) 
    .catch(error => rejectWithValue(error)) ;
})

//! Delete product from wish list
export const deleteProductFromWishList = createAsyncThunk('wishList/deleteProductFromWishList' , async ( id , { rejectWithValue } ) => {
    return AuthAxios.delete(`http://localhost:4000/v1/wish/list/delete/${id}` , )
    .then(response => response) 
    .catch(error => rejectWithValue(error)) ;
})

const wishListSlice = createSlice({
    name : 'wishLists' ,

    initialState : {
        wishList : [] ,
        status : '' ,
        error : ''
    },

    reducers : {} ,

    extraReducers : ( builder ) => {
        builder

        //! Get all products
        .addCase(getAllWishListProducts.fulfilled , (state , action) => {
            state.status = 'fulfilled' ;
            state.wishList = action.payload ;
        })
        .addCase(getAllWishListProducts.pending , (state , action) => {
            state.status = 'pending' ;
        })
        .addCase(getAllWishListProducts.rejected , (state , action) => {
            state.status = 'rejected' ;
            state.error = action.payload ;
        })

        //! Add product to wish list
        .addCase(addProductToWishList.fulfilled , (state , action) => {
            state.status = 'fulfilled' ;
            state.wishList = action.payload ;
        })
        .addCase(addProductToWishList.pending , (state , action) => {
            state.status = 'pending' ;
        })
        .addCase(addProductToWishList.rejected , (state , action) => {
            state.status = 'rejected' ;
            state.error = action.payload ;
        })

        //! Delete product from wish list
        .addCase(deleteProductFromWishList.fulfilled , (state , action) => {
            state.status = 'fulfilled' ;
            state.wishList = state.wishList.filter(product => product._id !== action.payload.data.id) ;
        })
        .addCase(deleteProductFromWishList.pending , (state , action) => {
            state.status = 'pending' ;
        })
        .addCase(deleteProductFromWishList.rejected , (state , action) => {
            state.status = 'rejected' ;
            state.error = action.payload ;
        })
    }
}) ;

export default wishListSlice.reducer ;
