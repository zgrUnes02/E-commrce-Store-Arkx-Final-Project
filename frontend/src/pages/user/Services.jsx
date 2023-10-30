import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import AuthAxios from '../../helpers/request' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { Link } from 'react-router-dom';
import { getAllServices } from '../../redux/serviceSlice';

function Services() {

    const dispatch = useDispatch() ;
    const services = useSelector(state => state.service.services) ;

    useEffect(() => {
        const getData = async () => {
            const response = await AuthAxios.get('http://localhost:4000/v1/services') ;
            dispatch(getAllServices(response.data.docs)) ;
        }
        getData() ;
    } , [])

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" className="main">

                <div class="pagetitle">
                    <h1> Services </h1>
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

                            <table className="table text-center table-responsive-lg">
                                <thead>
                                    <tr>
                                        <th scope="col"> # </th>
                                        <th scope="col"> Service Name </th>
                                        <th scope="col"> Category Name </th>
                                        <th scope="col"> Subcategory Name </th>
                                        <th scope="col"> Company Name </th>
                                        <th scope="col"> Price </th>
                                        <th scope="col" width="14%"> Actions </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        services?.map((service , index) => 
                                        <tr key={index}>
                                            <th> { index + 1 } </th>
                                            <td> { service.service_name } </td>
                                            <td> { service.category_id.category_name } </td>
                                            <td> { service.subcategory_id.subcategory_name } </td>
                                            <td> { service.company_id.companyName } </td>
                                            <td> { service.price } MAD </td>
                                            <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                <button className='btn btn-outline-success'> <i className="fa-solid fa-eye"></i> </button>
                                                <button className='btn btn-outline-primary'> <i className="fa-solid fa-edit"></i> </button>
                                                <button className='btn btn-outline-danger'> <i className="fa-solid fa-trash"></i> </button>
                                            </td> 
                                        </tr>
                                        )
                                    }
                                </tbody>

                            </table>
                            </div>
                        </div>


                        </div>
                    </div>
                </section>

            </main>
        </React.Fragment>
    )
}

export default Services ;
