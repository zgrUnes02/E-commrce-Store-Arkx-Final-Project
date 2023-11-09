import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link, useNavigate } from 'react-router-dom' ;
import { useDispatch, useSelector } from 'react-redux' ;
import { createNewSubcategory } from '../../redux/subcategorySlice';
import { getAllCategories } from '../../redux/categorySlice';

function SubcategoriesCreate() {

    const navigate = useNavigate() ;
    const dispatch = useDispatch() ;

    useEffect(() => { dispatch(getAllCategories()) } , []) ;
    
    const categories = useSelector(state => state.category.categories) ;
    const errors = useSelector(state => state.subcategory.error) ;

    const [subcategory_name , setSubcategory_name] = useState() ;
    const [active , setActive] = useState() ;
    const [category_id , setCategory_id] = useState() ;

    const createNewSubcategorySubmit= (e) => {
        e.preventDefault() ;
        dispatch(createNewSubcategory({ subcategory_name , active , category_id })).then(response => {
            if ( response.payload.messageSuccess ) {
                navigate('/subcategories') ;
            }
        })
    }

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Create new subcategory </h1>
                    <nav>
                        <ol class="breadcrumb">
                            <Link to={'/dashboard'} style={{ textDecoration:'none' }}> Home </Link>
                        </ol>
                    </nav>
                    { 
                        errors && errors?.map(error => 
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <strong> Warning : </strong> { error.msg }
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        )
                    }
                </div>

                <section className="section">

                    <div className="row">

                        <div className="col-lg-12">

                            <div className="card">

                                <div className="card-body">


                                    <form className='mt-3' onSubmit={createNewSubcategorySubmit}>  

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setSubcategory_name(e.target.value)} type="text" placeholder="Enter the subcategory's name" id="form6Example1" class="form-control"/>
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Subcategory Name </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <select required onChange={(e) => setCategory_id(e.target.value)} class="form-select" id="exampleSelect">
                                                        <option disabled selected> Enter the category's name </option>
                                                        {
                                                            categories?.map(category => 
                                                                <option value={category._id}> { category.category_name } </option>    
                                                            )
                                                        }
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Category Name </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <select onChange={(e) => setActive(e.target.value)} class="form-select" id="exampleSelect" required>
                                                        <option disabled selected> Enter the subcategory's status </option>
                                                        <option value="true"> Active </option>
                                                        <option value="false"> Inactive </option>
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Subcategory Status</label>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" class="btn btn-primary btn-block mb-4"> Add new subcategory </button>

                                    </form>

                                </div>
                            </div>

                        </div>

                    </div>

                </section>

            </main>
        </React.Fragment>
    )
}

export default SubcategoriesCreate
