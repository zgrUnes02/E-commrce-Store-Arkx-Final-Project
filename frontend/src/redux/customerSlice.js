import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" ;
import AuthAxios from '../helpers/request' ;
import axios from "axios";

//! Get all customers
export const getAllCustomers = createAsyncThunk('customers/getAllCustomers' , async () => {
    return AuthAxios.get('http://localhost:4000/v1/customers')
    .then(response => response.data.docs)
    .catch(error => console.log(error)) ;
})

//! Get all customers
export const getCustomerProfile = createAsyncThunk('customers/getCustomerProfile' , async () => {
    return AuthAxios.get('http://localhost:4000/v1/customer/profile')
    .then(response => response.data)
    .catch(error => console.log(error)) ;
})

//! Login customer
export const loginCustomer = createAsyncThunk('customers/loginCustomer' , async ( credential , { rejectWithValue } ) => {
    return axios.post('http://localhost:4000/v1/customers/login' , credential)
    .then(response => response.data)
    .catch(error => rejectWithValue(error.response)) ;
})

//! Register customer
export const registerCustomer = createAsyncThunk('customers/registerCustomer' , async ( data , { rejectWithValue } ) => {
    return axios.post('http://localhost:4000/v1/customers/register' , data)
    .then(response => response.data)
    .catch(error => rejectWithValue(error.response)) ;
})

//! Delete customer
export const deleteCustomer = createAsyncThunk('customers/deleteCustomer' , async ( id ) => {
    return AuthAxios.delete(`http://localhost:4000/v1/customers/delete/${id}`)
    .then(response => {
        const returnData = { id : id , message : response.data.message } ;
        return returnData ;
    })
    .catch(error => console.log(error)) ;
})

const customerSlice = createSlice({
    name : 'customers' ,

    initialState : {
        customers : [] ,
        status : '' ,
        error : '' ,
        customer : '' ,
    } ,

    reducers : {
        //! Refresh customer
        refreshCustomer : (state , action) => {
            const index = state.customers.findIndex(customer => customer._id === action.payload._id) ;
            state.customers[index] = action.payload ;
        }
    } ,

    extraReducers : ( builder ) => {
        builder
        
        //! Get all customers
        .addCase(getAllCustomers.fulfilled , (state , action) => {
            state.customers = action.payload ;
            state.status = 'fulfilled' ;
        })
        .addCase(getAllCustomers.rejected , (state , action) => {
            state.error = action.payload ;
            state.status = 'rejected' ;
        })
        .addCase(getAllCustomers.pending , (state , action) => {
            state.status = 'pending' ;
        })

        //! Login customer
        .addCase(loginCustomer.fulfilled , (state , action) => {
            state.customers = action.payload ;
            state.status = 'fulfilled' ;
        })
        .addCase(loginCustomer.rejected , (state , action) => {
            state.error = action.payload ;
            state.status = 'rejected' ;
        })
        .addCase(loginCustomer.pending , (state , action) => {
            state.status = 'pending' ;
        })

        //! Register customer
        .addCase(registerCustomer.fulfilled , (state , action) => {
            state.status = 'fulfilled' ;
        })
        .addCase(registerCustomer.rejected , (state , action) => {
            state.error = action.payload ;
            state.status = 'rejected' ;
            console.log(action.payload)
        })
        .addCase(registerCustomer.pending , (state , action) => {
            state.status = 'pending' ;
        })

        //! Customer profile
        .addCase(getCustomerProfile.fulfilled , (state , action) => {
            state.customer = action.payload ;
            state.status = 'fulfilled' ;
        })
        .addCase(getCustomerProfile.rejected , (state , action) => {
            state.error = action.payload ;
            state.status = 'rejected' ;
        })
        .addCase(getCustomerProfile.pending , (state , action) => {
            state.status = 'pending' ;
        })

        //! Delete customer
        .addCase(deleteCustomer.fulfilled , (state , action) => {
            state.customers = state.customers.filter(customer => customer._id !== action.payload.id) ;
            state.status = 'fulfilled' ;
        })
        .addCase(deleteCustomer.rejected , (state , action) => {
            state.error = action.payload ;
            state.status = 'rejected' ;
        })
        .addCase(deleteCustomer.pending , (state , action) => {
            state.status = 'pending' ;
        })
    }
}) ;

export const { refreshCustomer } = customerSlice.actions ;
export default customerSlice.reducer ;
