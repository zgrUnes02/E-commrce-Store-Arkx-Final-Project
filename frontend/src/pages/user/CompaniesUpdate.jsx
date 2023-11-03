import React, { useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link, useNavigate, useParams } from 'react-router-dom' ;
import AuthAxios from '../../helpers/request' ;
import { useSelector } from 'react-redux' ;

function CompaniesUpdate() {

    const { id } = useParams() ; 
    const navigate = useNavigate() ;

    const companies = useSelector(state => state.company.companies) ;
    const company = companies.find(company => company._id === id) ; 

    const [companyName , setCompanyName] = useState(company.companyName) ;
    const [description, setDescription] = useState(company.description) ;
    const [logo , setLogo] = useState(company.logo) ;
    const [email , setEmail] = useState(company.email) ;
    const [city , setCity] = useState(company.city) ;
    const [location , setLocation] = useState(company.location) ;
    const [errors , setErrors] = useState() ;

    //! Update company
    const updateCompany = (e) => {
        e.preventDefault() ;
        const data = {
            companyName ,
            description ,
            logo ,
            email ,
            city ,
            location ,
        } ;
        AuthAxios.put(`http://localhost:4000/v1/company/${id}` , data)
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
                    <h1> Update { company.companyName } company </h1>
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
                                    <form className='mt-3' onSubmit={updateCompany}>  

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setCompanyName(e.target.value)} value={companyName} type="text" placeholder="Enter the company's name" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Company Name </label>
                                                </div>
                                            </div>

                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter the category's email" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Company Email </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setCity(e.target.value)} value={city} type="text" placeholder="Enter the company's city" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Company's City </label>
                                                </div>
                                            </div>

                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setLocation(e.target.value)} value={location} type="text" placeholder="Enter the company's location" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Company's Location </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} class="form-control" id="form6Example7" rows="4" >{description}</textarea>
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

                                        <button type="submit" class="btn btn-primary btn-block mb-4"> Update company </button>
                                    
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

export default CompaniesUpdate ;
