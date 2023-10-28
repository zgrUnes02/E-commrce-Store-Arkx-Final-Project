import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : 'products' ,

    initialState : {
        products : [] ,
    } ,

    reducers : {
        getAllProducts : (state , action) => {
            state.products = action.payload.map(product => {
                return { 
                    _id : product._id , 
                    product_name : product.product_name , 
                    subcategory_id : product.subcategory_id , 
                    price : product.price , 
                    active : product.active 
                }
            }) 
        } ,
    }
}) ;

export const { getAllProducts } = productSlice.actions ;
export default productSlice.reducer ;
