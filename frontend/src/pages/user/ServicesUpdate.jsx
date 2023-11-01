import React, { useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link, useNavigate, useParams } from 'react-router-dom' ;
import { useSelector } from 'react-redux' ;
import AuthAxios from '../../helpers/request' ;

function ServicesUpdate() {

    const { id } = useParams() ;
    const navigate = useNavigate() ;

    const services = useSelector(state => state.service.services) ;
    const companies = useSelector(state => state.company.companies) ;
    const categories = useSelector(state => state.category.categories) ;
    const subcategories = useSelector(state => state.subcategory.subcategories) ;

    const service = services.find(service => service._id === id) ;

    const allOptions = [
        '5 vs 5' ,
        '7 vs 7' ,
        '11 vs 11' ,
    ] ;

    const allCities = [
        'casablanca' ,
        'bouskoura' ,
        'berrechid' ,
        'settat' ,
    ] ;

    const [service_name , setService_name] = useState(service.service_name) ;
    const [service_image, setService_image] = useState(service.service_image) ;
    const [category_id , setCategory_id] = useState(service.category_id._id) ;
    const [subcategory_id , setSubcategory_id] = useState(service.subcategory_id._id) ;
    const [short_description , setShort_description] = useState(service.short_description) ;
    const [price , setPrice] = useState(service.price) ;
    const [city , setCity] = useState(service.city) ;
    const [location , setLocation] = useState(service.location) ;
    const [option , setOption] = useState(service.option) ;
    const [company_id , setCompany_id] = useState(service.company_id._id) ;
    const [errors , setErrors] = useState() ;

    const updateService = (e) => {
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
        AuthAxios.put(`http://localhost:4000/v1/services/${id}` , data)
        .then(response => {
            alert(response.data.message) ;
            navigate('/services') ;
        }).catch(error => {
            setErrors(error.response.data.errors)
        }) ;
    }

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Update { service.service_name } service </h1>
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


                                <form className='mt-3' onSubmit={updateService}>
                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input placeholder='Enter the service name' onChange={(e) => setService_name(e.target.value)} value={service_name} type="text" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Service Name </label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setService_image(e.target.value)} type="file" id="form6Example2" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example2"> Service Image </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row ">
                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select onChange={(e) => setCategory_id(e.target.value)} class="form-select" id="exampleSelect">
                                                        {
                                                            categories?.map(category => 
                                                                category._id === category_id ? <option selected value={category._id}> { category.category_name } </option>  : 
                                                                <option value={category._id}> { category.category_name } </option>    
                                                            )
                                                        }
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example3"> Category Name </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select onChange={(e) => setSubcategory_id(e.target.value)} class="form-select" id="exampleSelect">
                                                        {
                                                            subcategories?.map(subcategory => 
                                                                subcategory._id === service.subcategory_id._id ?
                                                                <option selected value= {subcategory._id} > { subcategory.subcategory_name } </option> :
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
                                                    <textarea onChange={(e) => setShort_description(e.target.value)} value={short_description} class="form-control" id="form6Example7" rows="2">{short_description}</textarea>
                                                    <label class="form-label mt-2 mx-3" for="form6Example7"> Enter the shirt description </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select onChange={(e) => setCity(e.target.value)} class="form-select" id="exampleSelect">
                                                        {
                                                            allCities.map(oneCity => 
                                                                oneCity === city ? <option select value={ oneCity }> { oneCity } </option> :
                                                                <option value={ oneCity }> { oneCity } </option> 
                                                            )
                                                        }
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example3"> Stadium City </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row ">
                                            <div className='col'>
                                                <div class="form-outline">
                                                    <input placeholder='Enter the service price' value={price} onChange={(e) => setPrice(e.target.value)} type="number" id="form6Example2" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example7"> Enter the service price </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <input placeholder='Enter the service location' value={location} onChange={(e) => setLocation(e.target.value)} type="text" id="form6Example2" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example7"> Enter the service location </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select onChange={(e) => setOption(e.target.value)} class="form-select" id="exampleSelect">
                                                        {
                                                            allOptions?.map(oneOption =>
                                                                oneOption === option ? <option selected value={ option }> { option } </option> :
                                                                <option value={ oneOption }> { oneOption } </option>
                                                            )
                                                        }
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example3"> Stadium Options </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select onChange={(e => setCompany_id(e.target.value))} class="form-select" id="exampleSelect">
                                                        {
                                                            companies?.map(company => 
                                                                company._id === service.company_id._id ?
                                                                <option selected value={company._id}> { company.companyName } </option> :
                                                                <option value={company._id}> { company.companyName } </option>
                                                            )
                                                        }
                                                    </select>
                                                    <label class="form-label mt-2 mx-3" for="form6Example3"> Company Name </label>
                                                </div>
                                            </div>

                                        </div>

                                        <button type="submit" class="btn btn-primary btn-block mb-4"> Update service </button>
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

export default ServicesUpdate
