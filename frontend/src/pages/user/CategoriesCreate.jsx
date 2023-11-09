import React, { useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link, useNavigate } from 'react-router-dom' ;
import { useDispatch, useSelector } from 'react-redux';
import { createNewCategory } from '../../redux/categorySlice';

function CategoriesCreate() {

    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;
    const errors = useSelector(state => state.category.error)

    const [category_name , setCategory_name] = useState() ;
    const [active , setActive] = useState() ;

    //! Create New Category In Database 
    const createCategory = (e) => {
        e.preventDefault() ;
        dispatch(createNewCategory({category_name , active})).then(response => {
            if ( response.payload.messageSuccess ) {
                navigate('/categories')
            }
        }) ;
    }

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">
                <div class="pagetitle">
                    <h1> Create new category </h1>
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
                                    <form className='mt-3' onSubmit={createCategory}>  

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setCategory_name(e.target.value)} type="text" placeholder="Enter the category's name" id="form6Example1" class="form-control" required/>
                                                    <label class="form-label mt-2 mx-3" for="form6Example1">Category Name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <select name='category_status' onChange={(e) => setActive(e.target.value)} class="form-select" id="exampleSelect">
                                                        <option disabled selected> Enter the category's status </option>
                                                        <option value="true"> Active </option>
                                                        <option value="false"> Inactive </option>
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example1">Category Status</label>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" class="btn btn-primary btn-block mb-4"> Add new category </button>

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

export default CategoriesCreate
