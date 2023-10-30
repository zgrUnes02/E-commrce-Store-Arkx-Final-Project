import React, { useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link, useNavigate, useParams } from 'react-router-dom' ;
import { useDispatch , useSelector } from 'react-redux' ;
import AuthAxios from '../../helpers/request' ;

function CategoriesUpdate() {

    const navigate = useNavigate() ;

    const { id } = useParams() ; 
    const categories = useSelector(state => state.category.categories) ;
    const category = categories.find(category => category._id === id) ;

    const [category_name , setCategory_name] = useState(category.category_name) ;
    const [active , setActive] = useState(category.active) ;
    const [errors , setErrors] = useState() ;

    //! Update Category In Database 
    const updateCategory = (e) => {
        e.preventDefault() ;
        AuthAxios.put(`http://localhost:4000/v1/categories/${id}` , { category_name , active })
        .then(response => {
            alert(response.data.message) ;
            navigate('/categories')
        })
        .catch(error => setErrors(error.response.data.errors)) ;
    }

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">
                <div class="pagetitle">
                    <h1> Update the category </h1>
                    <nav>
                        <ol class="breadcrumb">
                            <Link style={{ textDecoration:'none' }}> Home </Link>
                        </ol>
                    </nav>

                    {/* Show Alerts If There Is Any Errors  */}
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
                                    <form className='mt-3' onSubmit={updateCategory}>  

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input value={category_name} onChange={(e) => setCategory_name(e.target.value)} type="text" placeholder="Enter the category's name" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1">Category Name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <select name='category_status' onChange={(e) => setActive(e.target.value)} class="form-select" id="exampleSelect" required >
                                                        {
                                                            category.active ? 
                                                            <>
                                                                <option selected value="true"> Active </option>
                                                                <option value="false"> Inactive </option>
                                                            </> :
                                                            <>
                                                                <option selected value="false"> Inactive </option>
                                                                <option value="true"> Active </option>
                                                            </>
                                                        }
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example1">Category Status</label>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" class="btn btn-primary btn-block mb-4"> Update category </button>

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

export default CategoriesUpdate ;
