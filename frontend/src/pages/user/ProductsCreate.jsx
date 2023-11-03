import React, { useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { Link , useNavigate } from 'react-router-dom' ;
import { useSelector } from 'react-redux' ;
import AuthAxios from '../../helpers/request' ;

function ProductCreate() {

    const navigate = useNavigate() ;
    const subcategories = useSelector(state => state.subcategory.subcategories) ;

    const [product_name , setProduct_name] = useState() ;
    const [subcategory_id , setSubcategory_id] = useState() ;
    const [short_description , setShortDescription] = useState() ;
    const [long_description , setLongDescription] = useState() ;
    const [price , setPrice] = useState() ;
    const [active , setActive] = useState() ;
    const [options , setOptions] = useState() ;
    const [product_image , setProduct_image] = useState() ;
    const [errors , setErrors] = useState() ;

    const handleSelectChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
        setOptions(selectedValues);
    };

    const createNewProduct = (e) => {
        e.preventDefault() ;

        const data = {
            product_name ,
            subcategory_id ,
            short_description ,
            long_description ,
            price,
            active,
            options,
            product_image
        } ;

        AuthAxios.post('http://localhost:4000/v1/products' , data)
        .then(response => {
            alert(response.data.message) ;
            navigate('/products') ;
        })
        .catch(error => setErrors(error.response.data.errors)) ;
    }

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Create new product </h1>
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


                                <form className='mt-3' onSubmit={createNewProduct}>
                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setProduct_name(e.target.value)} placeholder='Enter the product name' type="text" id="form6Example1" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example1"> Product Name </label>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    <input onChange={(e) => setProduct_image(e.target.value)} type="file" id="form6Example2" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example2"> Product Image </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select onChange={(e) => setSubcategory_id(e.target.value)} class="form-select" id="exampleSelect" >
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
                                                    <input onChange={(e) => setPrice(e.target.value)} placeholder='Enter the product price' type="number" id="form6Example4" class="form-control" />
                                                    <label class="form-label mt-2 mx-3" for="form6Example4"> Product Price </label>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="row">
                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <textarea onChange={(e) => setShortDescription(e.target.value)} class="form-control" id="form6Example7" rows="2" ></textarea>
                                                    <label class="form-label mt-2 mx-3" for="form6Example7"> Enter the short description </label>
                                                </div>
                                            </div>

                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <textarea onChange={(e) => setLongDescription(e.target.value)} class="form-control" id="form6Example7" rows="2" ></textarea>
                                                    <label class="form-label mt-2 mx-3" for="form6Example7"> Enter the long description </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div className='col'>
                                                <div class="form-outline mb-4">
                                                    <select onChange={handleSelectChange} value={options} class="form-select" id="exampleSelect" multiple required >
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
                                                    <select onChange={(e) => setActive(e.target.value)} class="form-select" id="exampleSelect" >
                                                        <option disabled selected> Enter activation status </option>
                                                        <option value="true"> Active </option>
                                                        <option value="false"> Inactive </option>
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
