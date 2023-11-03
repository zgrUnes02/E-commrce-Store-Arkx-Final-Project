import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name : 'companies' ,

    initialState : {
        companies : [] ,
    } ,

    reducers : {

        //! Get all companies
        getAllCompanies : (state , action) => {
            state.companies = action.payload.map(company => {
                return {
                    _id : company._id ,
                    companyName : company.companyName ,
                    description : company.description ,
                    email : company.email ,
                    city : company.city ,
                    location : company.location ,
                    logo : company.logo ,
                }
            })
        } ,

        //! Delete a company
        deleteCompany : (state , action) => {
            state.companies = state.companies.filter(company => company._id !== action.payload.id) ;
        } ,
    }
})

export const { getAllCompanies , deleteCompany } = companySlice.actions ;
export default companySlice.reducer ;
