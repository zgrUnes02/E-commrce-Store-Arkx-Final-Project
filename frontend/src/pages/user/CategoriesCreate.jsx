import React from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link } from 'react-router-dom' ;

function CategoriesCreate() {
    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Create new category </h1>
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
                                                <input type="text" placeholder="Enter the category's name" id="form6Example1" class="form-control" required />
                                                <label class="form-label mt-2 mx-3" for="form6Example1">Category Name</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col">
                                            <div class="form-outline">
                                                <select class="form-select" id="exampleSelect" required>
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
