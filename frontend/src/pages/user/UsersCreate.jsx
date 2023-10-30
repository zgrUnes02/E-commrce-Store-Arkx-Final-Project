import React from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link } from 'react-router-dom' ;

function UsersCreate() {
    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Create new user </h1>
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
                                                    <input placeholder='enter the first name' type="text" id="form6Example1" class="form-control" required />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> First Name </label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input placeholder='enter the last name' type="text" id="form6Example2" class="form-control" required />
                                                    <label class="form-label mt-2 mx-3" for="form6Example2"> Last Name </label>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="row mb-4">

                                            <div class="col">
                                                <div class="form-outline">
                                                    <input placeholder='enter the username' type="text" id="form6Example1" class="form-control" required />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Username </label>
                                                </div>
                                            </div>

                                            <div class="col">
                                                <div class="form-outline">
                                                    <label class="form-label mt-2 mx-5" for="form6Example1"> Role </label>

                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="role" id="inlineRadio1" value="admin" />
                                                        <label class="form-check-label" for="inlineRadio1"> Admin </label>
                                                    </div>

                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" checked type="radio" name="role" id="inlineRadio2" value="manager" />
                                                        <label class="form-check-label" for="inlineRadio2"> Manager </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="row mb-4">

                                            <div class="col">
                                                <div class="form-outline">
                                                    <input placeholder='enter the email' type="email" id="form6Example1" class="form-control" required />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Email</label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input placeholder='enter the password' type="text" id="form6Example2" class="form-control" required />
                                                    <label class="form-label mt-2 mx-3" for="form6Example2"> Password </label>
                                                </div>
                                            </div>

                                        </div>

                                        <button type="submit" class="btn btn-primary btn-block mb-3"> Create the new user </button>
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

export default UsersCreate
