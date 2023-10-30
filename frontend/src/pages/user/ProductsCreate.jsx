import React from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link } from 'react-router-dom' ;
import { useSelector } from 'react-redux' ;

function ProductCreate() {

    const subcategories = useSelector(state => state.subcategory.subcategories) ;

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Create new product </h1>
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
                                                    <input type="text" id="form6Example1" class="form-control" required />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Product Name </label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input type="file" id="form6Example2" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example2"> Product Image </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select class="form-select" id="exampleSelect" required >
                                                        <option disabled selected> Enter the subcategory's name </option>
                                                        {
                                                            subcategories?.map(subcategory => 
                                                                <option value={ subcategory._id }> { subcategory.subcategory_name } </option> 
                                                            )
                                                        }
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example3"> Subcategory Name </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <input type="number" id="form6Example4" class="form-control" required />
                                                    <label class="form-label mt-2 mx-3" for="form6Example4"> Product Price </label>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="row">
                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <textarea class="form-control" id="form6Example7" rows="2" required ></textarea>
                                                    <label class="form-label mt-2 mx-3" for="form6Example7"> Enter the shirt description </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <textarea class="form-control" id="form6Example7" rows="2" required ></textarea>
                                                    <label class="form-label mt-2 mx-3" for="form6Example7"> Enter the long description </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select class="form-select" id="exampleSelect" multiple required>
                                                        <option disabled selected> Enter the options </option>
                                                        <option value="XS"> XS </option>
                                                        <option value="S"> S </option>
                                                        <option value="M"> M </option>
                                                        <option value="L"> L </option>
                                                        <option value="XL"> XL </option>
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example3"> Subcategory Options </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select class="form-select" id="exampleSelect" required>
                                                        <option disabled selected> Enter activation status </option>
                                                        <option value="option2"> Active </option>
                                                        <option value="option3"> Inactive </option>
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example3"> Product activation status </label>
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

export default ProductCreate
