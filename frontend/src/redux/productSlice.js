import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" ;
import AuthAxios from "../helpers/request";

export const getAllProducts = createAsyncThunk('product/getAllProducts' , async () => {
    return AuthAxios.get('http://localhost:4000/v1/products')
    .then(response => response.data.docs)
    .catch(error => console.log(error))
}) 

export const deleteProduct = createAsyncThunk('product/deleteProduct' , async ( id ) => {
    return AuthAxios.delete(`http://localhost:4000/v1/product/${id}`)
    .then(response => {
        const returnData = {id : id , message : response.data.message} ;
        return returnData ;
    })
    .catch(error => console.log(error.response))
})

const productSlice = createSlice({
    name : 'products' ,

    initialState : {
        products : [] ,
        status : '' ,
        error : '' ,
    } ,

    reducers : {} ,

    extraReducers : ( builder ) => {
        builder

        //! Get all products
        .addCase(getAllProducts.fulfilled , (state , action) => {
            state.products = action.payload 
            state.status = "fulfilled" 
        })
        .addCase(getAllProducts.rejected , (state , action) => {
            state.error = action.payload
            state.status = "rejected" 
        })
        .addCase(getAllProducts.pending , (state , action) => {
            state.status = "pending"  
        })

        //! Delete product
        .addCase(deleteProduct.fulfilled , (state , action) => {
            state.products = state.products.filter(product => product._id !== action.payload.id) ;
            state.status = "fulfilled" 
        })
        .addCase(deleteProduct.rejected , (state , action) => {
            state.error = action.payload
            state.status = "rejected" 
        })
        .addCase(deleteProduct.pending , (state , action) => {
            state.status = "pending"  
        })
    }
}) ;

export default productSlice.reducer ;
