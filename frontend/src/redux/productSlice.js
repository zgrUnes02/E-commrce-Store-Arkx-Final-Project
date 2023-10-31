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
                    product_image : product.product_image , 
                    subcategory_id : product.subcategory_id , 
                    long_description : product.long_description ,
                    short_description : product.short_description ,
                    options : product.options ,
                    price : product.price , 
                    active : product.active 
                }
            }) 
        } ,

        deleteProduct : (state , action) => {
            state.products = state.products.filter(product => product._id !== action.payload.id) ;
        }
    }
}) ;

export const { getAllProducts , deleteProduct } = productSlice.actions ;
export default productSlice.reducer ;
