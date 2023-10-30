import React from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link } from 'react-router-dom' ;

function CompaniesCreate() {
    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Create new company </h1>
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
                                                <label class="form-label mt-2 mx-3" for="form6Example1"> Company Name </label>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <div class="form-outline">
                                                <input type="email" placeholder="Enter the category's email" id="form6Example1" class="form-control" required />
                                                <label class="form-label mt-2 mx-3" for="form6Example1"> Company Email </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col">
                                            <div class="form-outline">
                                                <textarea class="form-control" id="form6Example7" rows="4" required ></textarea>
                                                <label class="form-label mt-2 mx-3" for="form6Example1"> Company Description </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-4">
                                        <div class="col">
                                            <div class="form-outline">
                                                <input type="file" id="form6Example1" class="form-control" required />
                                                <label class="form-label mt-2 mx-3" for="form6Example1"> Company Logo </label>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-block mb-4"> Add new company </button>
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

export default CompaniesCreate
