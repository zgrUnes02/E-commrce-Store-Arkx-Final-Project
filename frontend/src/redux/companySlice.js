import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" ;
import AuthAxios from '../helpers/request' ;

export const getAllCompanies = createAsyncThunk('companies/getAllCompanies' , async () => {
    return AuthAxios.get('http://localhost:4000/v1/companies')
    .then(response => response.data.docs)
    .catch(error => console.log(error)) ;
})

export const deleteCompany = createAsyncThunk('companies/deleteCompany' , async ( id ) => {
    return AuthAxios.delete(`http://localhost:4000/v1/companies/${id}`)
    .then(response => {
        const returnData = { id : id  , message : response.data.message } ;
        return returnData ; 
    })
})

const companySlice = createSlice({
    name : 'companies' ,

    initialState : {
        companies : [] ,
        status : '' ,
        error : ''
    } ,

    reducers : {} ,

    extraReducers : ( builder ) => {
        builder 

        //! Get all companies
        .addCase(getAllCompanies.fulfilled , (state , action) => {
            state.companies = action.payload ;
            state.status = 'fulfilled' ;
        })
        .addCase(getAllCompanies.rejected , (state , action) => {
            state.companies = action.payload ;
            state.status = 'rejected' ;
        })
        .addCase(getAllCompanies.pending , (state , action) => {
            state.status = 'pending' ;
        })

        //! Delete company
        .addCase(deleteCompany.fulfilled , (state , action) => {
            state.companies = state.companies.filter(company => company._id !== action.payload.id) ;
            state.status = 'fulfilled' ;
        })
        .addCase(deleteCompany.rejected , (state , action) => {
            state.companies = action.payload ;
            state.status = 'rejected' ;
        })
        .addCase(deleteCompany.pending , (state , action) => {
            state.status = 'pending' ;
        })
    }
})

export default companySlice.reducer ;
