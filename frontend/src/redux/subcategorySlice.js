import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthAxios from "../helpers/request";

//! Get aLl subcategories
export const getAllSubcategories = createAsyncThunk('categories/getAllSubcategories', async () => {
    return AuthAxios.get('http://localhost:4000/v1/subcategories')
    .then(response => response.data.docs)
    .catch(error => console.log(error))
}) ;

//! Create new subcategory
export const createNewSubcategory = createAsyncThunk('categories/createNewSubcategory', async ( subcategory , { rejectWithValue } ) => {
    return AuthAxios.post('http://localhost:4000/v1/subcategories' , subcategory)
    .then(response => {
        const returnData = { messageSuccess : response.data.message } ;
        return returnData ;
    })
    .catch(error => rejectWithValue(error.response.data.errors))
}) ;

//! Delete subcategory
export const deleteSubcategory = createAsyncThunk('categories/deleteSubcategory' , async ( id ) => {
    return AuthAxios.delete(`http://localhost:4000/v1/subcategories/${id}`)
    .then(response => {
        const returnData = { id : id , message : response.data.message }
        return returnData ;
    })
    .catch(error => console.log(error.response)) ;
}) ;

const subcategorySlice = createSlice({
    name : 'subcategory' ,

    initialState : {
        subcategories : [] ,
        status : '' ,
        error : '' ,
    } ,

    reducers : {} ,

    extraReducers : ( builder ) => {
        builder

        //! Get all subcategories
        .addCase(getAllSubcategories.fulfilled , (state , action) => {
            state.subcategories = action.payload  ;
            state.status = "fulfilled" ;
        })
        .addCase(getAllSubcategories.rejected , (state , action) => {
            state.status = "rejected" ;
            state.subcategories = action.payload ;
        })
        .addCase(getAllSubcategories.pending , (state , action) => {
            state.status = "pending" ;
        })

        //! Create subcategory
        .addCase(createNewSubcategory.fulfilled , (state , action) => {
            state.status = "fulfilled" 
        })
        .addCase(createNewSubcategory.rejected , (state , action) => {
            state.status = "rejected" ;
            state.error = action.payload ;
        })
        .addCase(createNewSubcategory.pending , (state , action) => {
            state.status = "pending" ;
        })

        //! Delete subcategories
        .addCase(deleteSubcategory.fulfilled , (state , action) => {
            state.subcategories = state.subcategories.filter(subcategory => subcategory._id !== action.payload.id)
            state.status = "fulfilled" ;
        })
        .addCase(deleteSubcategory.rejected , (state , action) => {
            state.status = "rejected" ;
            state.error = action.payload ;
        })
        .addCase(deleteSubcategory.pending , (state , action) => {
            state.status = "pending" ;
        })
    }
}) ;

export default subcategorySlice.reducer ;
