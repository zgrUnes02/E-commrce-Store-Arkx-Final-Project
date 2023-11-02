import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name : 'customers' ,

    initialState : {
        customers : [] ,
    } ,

    reducers : {

        //! Get all customers
        getAllCustomers : (state , action) => {
            state.customers = action.payload.map(customer => {
                return {
                    _id : customer._id ,
                    first_name : customer.first_name ,
                    last_name : customer.last_name ,
                    email : customer.email ,
                    active : customer.active ,
                    valid_account : customer.valid_account ,
                }
            })
        } ,

        //! Delete customer
        deleteCustomer : ( state , action ) => {
            state.customers = state.customers.filter(customer => customer._id !== action.payload.id) ;
        }
    }
}) ;

export const { getAllCustomers , deleteCustomer } = customerSlice.actions ;
export default customerSlice.reducer ;
