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
                }
            })
        } ,
    }
})

export const { getAllCompanies } = companySlice.actions ;
export default companySlice.reducer ;
