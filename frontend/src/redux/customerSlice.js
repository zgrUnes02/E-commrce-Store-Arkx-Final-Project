import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" ;
import AuthAxios from '../helpers/request' ;

export const getAllCustomers = createAsyncThunk('customers/getAllCustomers' , async () => {
    return AuthAxios.get('http://localhost:4000/v1/customers')
    .then(response => response.data.docs)
    .catch(error => console.log(error)) ;
})

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
