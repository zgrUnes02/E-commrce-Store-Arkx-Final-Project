import React, { useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link, useNavigate } from 'react-router-dom' ;
import AuthAxios from '../../helpers/request' ;

function UsersCreate() {

    const navigate = useNavigate() ;

    const [first_name , setFirst_name] = useState() ;
    const [last_name , setLast_name] = useState() ;
    const [user_name , setUser_name] = useState() ;
    const [email , setEmail] = useState() ;
    const [password , setPassword] = useState() ;
    const [role , setRole] = useState() ;
    const [errors , setErrors] = useState() ;

    //! Create new user
    const createNewUser = (e) => {
        e.preventDefault() ;
        const data = {
            first_name ,
            last_name ,
            user_name ,
            email ,
            password ,
            role ,
        } ;
        AuthAxios.post('http://localhost:4000/v1/users' , data)
        .then(response => {
            alert(response.data.message) ;
            navigate('/users') ;
        }).catch(error => setErrors(error.response.data.errors)) ;
    }

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


                                <form className='mt-3' onSubmit={createNewUser}>

                                        <div class="row mb-4">

                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setFirst_name(e.target.value)} placeholder='enter the first name' type="text" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> First Name </label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setLast_name(e.target.value)} placeholder='enter the last name' type="text" id="form6Example2" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example2"> Last Name </label>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="row mb-4">

                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setUser_name(e.target.value)} placeholder='enter the username' type="text" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Username </label>
                                                </div>
                                            </div>

                                            <div class="col">
                                                <div class="form-outline">
                                                    <label class="form-label mt-2 mx-5" for="form6Example1"> Role </label>

                                                    <div class="form-check form-check-inline">
                                                        <input onChange={(e) => setRole(e.target.value)} checked={role === 'admin'} class="form-check-input" type="radio" name="role" id="inlineRadio1" value="admin" />
                                                        <label class="form-check-label" for="inlineRadio1"> Admin </label>
                                                    </div>

                                                    <div class="form-check form-check-inline">
                                                        <input onChange={(e) => setRole(e.target.value)} checked={role === 'manager'} class="form-check-input" type="radio" name="role" id="inlineRadio2" value="manager" />
                                                        <label class="form-check-label" for="inlineRadio2"> Manager </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="row mb-4">

                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setEmail(e.target.value)} placeholder='enter the email' type="email" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Email</label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setPassword(e.target.value)} placeholder='enter the password' type="password" id="form6Example2" class="form-control" />
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
