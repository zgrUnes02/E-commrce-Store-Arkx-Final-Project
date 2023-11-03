import React, { useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link, useNavigate } from 'react-router-dom' ;
import AuthAxios from '../../helpers/request' ;

function CompaniesCreate() {

    const navigate = useNavigate() ;

    const [companyName , setCompanyName] = useState() ;
    const [description , setDescription] = useState() ;
    const [logo , setLogo] = useState() ;
    const [email , setEmail] = useState() ;
    const [city , setCity] = useState() ;
    const [location , setLocation] = useState() ;
    const [errors , setErrors] = useState() ;

    //! Create new company
    const createNewCompany = (e) => {
        e.preventDefault() ;
        const data = {
            companyName ,
            description ,
            logo ,
            email ,
            city ,
            location ,
        } ;
        AuthAxios.post('http://localhost:4000/v1/companies' , data)
        .then(response => {
            alert(response.data.message)
            navigate('/companies') ;
        }).catch(error => setErrors(error.response.data.errors)) ;
    }

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Create new company </h1>
                    <nav>
                        <ol class="breadcrumb">
                            <Link to={'/dashboard'} style={{ textDecoration:'none' }}> Home </Link>
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
                                    <form className='mt-3' onSubmit={createNewCompany}>  

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setCompanyName(e.target.value)} type="text" placeholder="Enter the company's name" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Company Name </label>
                                                </div>
                                            </div>

                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter the category's email" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Company Email </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="Enter the company's city" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Company's City </label>
                                                </div>
                                            </div>

                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Enter the company's location" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Company's Location </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <textarea onChange={(e) => setDescription(e.target.value)} class="form-control" id="form6Example7" rows="4" ></textarea>
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Company Description </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setLogo(e.target.value)} type="file" id="form6Example1" class="form-control" />
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
