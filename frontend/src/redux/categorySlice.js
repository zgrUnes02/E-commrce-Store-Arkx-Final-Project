import { createSlice } from "@reduxjs/toolkit" ;

const categorySlice = createSlice({
    name : 'categories' ,

    initialState : {
        categories : []
    } ,

    reducers : {
        getAllCategories : ( state , action ) => {
            state.categories = action.payload.map(category => {
                return {
                    _id : category._id , 
                    category_name : category.category_name , 
                    active : category.active 
                }
            }) 
        }
    } ,
}) ;

export const { getAllCategories , } = categorySlice.actions ;
export default categorySlice.reducer ;
