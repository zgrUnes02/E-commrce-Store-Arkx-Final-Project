import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link, useNavigate } from 'react-router-dom' ;
import { useDispatch, useSelector } from 'react-redux' ;
import AuthAxios from '../../helpers/request' ;
import { getAllCategories } from '../../redux/categorySlice' ;
import { getAllCompanies } from '../../redux/companySlice' ;
import { getAllSubcategories } from '../../redux/subcategorySlice' ;
import { createNewService } from '../../redux/serviceSlice';

function ServicesCreate() {

    const navigate = useNavigate() ;
    const dispatch = useDispatch() ;

    useEffect(() => {
        dispatch(getAllCompanies()) ;
        dispatch(getAllCategories()) ;
        dispatch(getAllSubcategories()) ;
    } , [])

    const companies = useSelector(state => state.company.companies) ;
    const categories = useSelector(state => state.category.categories) ;
    const subcategories = useSelector(state => state.subcategory.subcategories) ;
    const errors = useSelector(state => state.service.error) ;

    const [service_name , setService_name] = useState() ;
    const [service_image, setService_image] = useState() ;
    const [category_id , setCategory_id] = useState() ;
    const [subcategory_id , setSubcategory_id] = useState() ;
    const [short_description , setShort_description] = useState() ;
    const [price , setPrice] = useState() ;
    const [city , setCity] = useState() ;
    const [location , setLocation] = useState() ;
    const [option , setOption] = useState() ;
    const [company_id , setCompany_id] = useState() ;

    const createNewServiceSubmit = (e) => {
        e.preventDefault() ;
        const data = {
            service_name ,
            service_image ,
            category_id ,
            subcategory_id  ,
            short_description ,
            price ,
            city ,
            location ,
            option ,
            company_id
        }
        dispatch(createNewService(data)).then(response => {
            if ( response.payload.messageSuccess ) {
                navigate('/services') ;
            }
        }) ;
    }

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Create new service </h1>
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
                                    <form className='mt-3' onSubmit={createNewServiceSubmit}>
                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input placeholder='Enter the service name' onChange={(e) => setService_name(e.target.value)} type="text" id="form6Example1" class="form-control" required/>
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Service Name </label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setService_image(e.target.value)} type="file" id="form6Example2" class="form-control" required/>
                                                    <label class="form-label mt-2 mx-3" for="form6Example2"> Service Image </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row ">
                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select onChange={(e) => setCategory_id(e.target.value)} class="form-select" id="exampleSelect" required>
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
                                                    <select onChange={(e) => setSubcategory_id(e.target.value)} class="form-select" id="exampleSelect" required>
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
                                                    <textarea onChange={(e) => setShort_description(e.target.value)} class="form-control" id="form6Example7" rows="2" required></textarea>
                                                    <label class="form-label mt-2 mx-3" for="form6Example7"> Enter the shirt description </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select onChange={(e) => setCity(e.target.value)} class="form-select" id="exampleSelect" required>
                                                        <option disabled selected> Enter the stadium city </option>
                                                        <option value="casablanca"> Casablanca </option>
                                                        <option value="bouskoura"> Bouskoura </option>
                                                        <option value="berrechid"> Berrechid </option>
                                                        <option value="settat"> Settat </option>
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example3"> Stadium City </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row ">
                                            <div className='col'>
                                                <div class="form-outline">
                                                    <input placeholder='Enter the service price' onChange={(e) => setPrice(e.target.value)} type="number" id="form6Example2" class="form-control" required/>
                                                    <label class="form-label mt-2 mx-3" for="form6Example7"> Enter the service price </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <input placeholder='Enter the service location' onChange={(e) => setLocation(e.target.value)} type="text" id="form6Example2" class="form-control" required/>
                                                    <label class="form-label mt-2 mx-3" for="form6Example7"> Enter the service location </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select onChange={(e) => setOption(e.target.value)} class="form-select" id="exampleSelect" required>
                                                        <option disabled selected> Enter the stadium options </option>
                                                        <option value="5 vs 5"> 5 vs 5 </option>
                                                        <option value="7 vs 7"> 7 vs 7 </option>
                                                        <option value="11 vs 11"> 11 x 11 </option>
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example3"> Stadium Options </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select onChange={(e => setCompany_id(e.target.value))} class="form-select" id="exampleSelect" required>
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
                                        <button type="submit" class="btn btn-primary btn-block mb-4"> Create the new service </button>
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
