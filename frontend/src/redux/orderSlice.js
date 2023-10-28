import { createSlice } from "@reduxjs/toolkit"

const orderSlice = createSlice({
    name : 'orders' ,

    initialState : {
        orders : [] ,
    } ,

    reducers : {

        //! Get all orders
        getAllOrders : (state , action) => {
            state.orders = action.payload.map(order => {
                return {
                    _id : order._id ,
                    customer_id : order.customer_id ,
                    status : order.status ,
                }
            })
        } ,
    }
}) ;

export const  { getAllOrders } = orderSlice.actions ;
export default orderSlice.reducer ;
