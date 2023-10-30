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
        } ,

        deleteCategory : (state , action) => {
            state.categories = state.categories.filter(category => category._id !== action.payload.id) ;
        }
    } 
}) ;

export const { getAllCategories , deleteCategory } = categorySlice.actions ;
export default categorySlice.reducer ;
