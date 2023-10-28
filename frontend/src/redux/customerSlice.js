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
    }
}) ;

export const { getAllCustomers } = customerSlice.actions ;
export default customerSlice.reducer ;
