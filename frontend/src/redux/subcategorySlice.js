import { createSlice } from "@reduxjs/toolkit";

const subcategorySlice = createSlice({
    name : 'subcategory' ,

    initialState : {
        subcategories : [] ,
    } ,

    reducers : {

        //! Get all subcategories
        getAllSubcategories : (state , action) => {
            state.subcategories = action.payload.map(subcategory => {
                return { 
                    _id : subcategory._id , 
                    subcategory_name : subcategory.subcategory_name , 
                    category_id : subcategory.category_id , 
                    active : subcategory.active 
                }
            })
        } ,

        deleteSubcategory : (state , action) => {
            state.subcategories = state.subcategories.filter(subcategory => subcategory._id !== action.payload.id) ;
        }
    } ,
}) ;

export const { getAllSubcategories , deleteSubcategory } = subcategorySlice.actions ;
export default subcategorySlice.reducer ;
