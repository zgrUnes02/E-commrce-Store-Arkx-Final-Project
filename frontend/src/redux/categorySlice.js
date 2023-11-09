import { createSlice, createAsyncThunk } from "@reduxjs/toolkit" ;
import AuthAxios from "../helpers/request";

//! Get aLl categories
export const getAllCategories = createAsyncThunk('categories/getAllCategories', async () => {
    return AuthAxios.get('http://localhost:4000/v1/categories')
    .then(response => response.data.docs)
    .catch(error => console.log(error))
}) ;

//! Create new category
export const createNewCategory = createAsyncThunk('categories/createNewCategory' , async ( newCategory , { rejectWithValue }) => {
    return AuthAxios.post('http://localhost:4000/v1/categories' , newCategory)
    .then(response => {
        const returnData = {messageSuccess :response.data.message } ;
        return returnData ;
    })
    .catch(error => rejectWithValue(error.response.data.errors))
}) ;

//! Delete category
export const deleteCategory = createAsyncThunk('categories/deleteSubcategory' , async ( id ) => {
    return AuthAxios.delete(`http://localhost:4000/v1/categories/${id}`)
    .then(response => {
        const returnData = {id : id , message : response.data.message}
        return returnData
    })
    .catch(error => console.log(error.response)) ;
}) ;

const categorySlice = createSlice({
    name : 'categories' ,

    initialState : {
        categories : [],
        status : '',
        error : '' ,
    } ,

    reducers : {} , 

    extraReducers: ( builder ) => {
        builder

        //! Get all categories
        .addCase(getAllCategories.fulfilled , (state, action) => {
            state.categories = action.payload ;
            state.status = "OK" ;
        })
        .addCase(getAllCategories.rejected , (state , action) => {
            state.status = "rejected" ;
            state.error = action.payload ;
        })
        .addCase(getAllCategories.pending , (state , action) => {
            state.status = "pending" ;
        })

        //! Create category
        .addCase(createNewCategory.fulfilled , (state, action) => {
            state.status = "fulfilled" ;
        })
        .addCase(createNewCategory.rejected , (state , action) => {
            state.status = "rejected" ;
            state.error = action.payload ;
        })
        .addCase(createNewCategory.pending , (state , action) => {
            state.status = "pending" ;
        })

        //! Delete category :
        .addCase(deleteCategory.fulfilled , (state , action) => {
            state.categories = state.categories.filter(category => category._id !== action.payload.id) ;
        })
        .addCase(deleteCategory.rejected , (state , action) => {
            state.status = "rejected" ;
            state.error = action.payload ;
        })
        .addCase(deleteCategory.pending , (state , action) => {
            state.status = "pending" ;
        })
    } 
}) ;

export default categorySlice.reducer ;
