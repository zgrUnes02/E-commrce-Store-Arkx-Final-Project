import React from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link } from 'react-router-dom' ;
import { useSelector } from 'react-redux' ;

function ServicesCreate() {

    const companies = useSelector(state => state.company.companies) ;
    const categories = useSelector(state => state.category.categories) ;
    const subcategories = useSelector(state => state.subcategory.subcategories) ;

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Create new service </h1>
                    <nav>
                        <ol class="breadcrumb">
                            <Link style={{ textDecoration:'none' }}> Home </Link>
                        </ol>
                    </nav>
                </div>

                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">


                                <form className='mt-3'>
                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input type="text" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Service Name </label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input type="file" id="form6Example2" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example2"> Service Image </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row ">
                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select class="form-select" id="exampleSelect">
                                                        <option disabled selected> Enter the category's name </option>
                                                        {
                                                            categories?.map(category => 
                                                                <option value={category._id}> { category.category_name } </option>    
                                                            )
                                                        }
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example3"> Category Name </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select class="form-select" id="exampleSelect">
                                                        <option disabled selected> Enter the subcategory's name </option>
                                                        {
                                                            subcategories?.map(subcategory => 
                                                                <option value= {subcategory._id} > { subcategory.subcategory_name } </option>
                                                            )
                                                        }
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example3"> Subcategory Name </label>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="row mb-4">
                                            <div className='col'>
                                                <div class="form-outline">
                                                    <textarea class="form-control" id="form6Example7" rows="2"></textarea>
                                                    <label class="form-label mt-2 mx-3" for="form6Example7"> Enter the shirt description </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row ">
                                            <div className='col'>
                                                <div class="form-outline">
                                                    <input type="number" id="form6Example2" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example7"> Enter the service price </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <input type="text" id="form6Example2" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example7"> Enter the service location </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select class="form-select" id="exampleSelect">
                                                        <option disabled selected> Enter the stadium options </option>
                                                        <option value="option2"> 5 vs 5 </option>
                                                        <option value="option3"> 7 vs 7 </option>
                                                        <option value="option4"> 11 x 11 </option>
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example3"> Stadium Options </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select class="form-select" id="exampleSelect">
                                                        <option disabled selected> Enter the company name </option>
                                                        {
                                                            companies?.map(company => 
                                                                <option value={company._id}> { company.companyName } </option>
                                                            )
                                                        }
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example3"> Company Name </label>
                                                </div>
                                            </div>

                                        </div>

                                        <button type="submit" class="btn btn-primary btn-block mb-4"> Create the new product </button>
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

export default ServicesCreate
