import React, { useEffect } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { Link } from 'react-router-dom';
import { deleteService, getAllServices } from '../../redux/serviceSlice';
import DataTable from 'datatables.net-dt' ;

function Services() {

    const dispatch = useDispatch() ;
    useEffect(() => { dispatch(getAllServices()) } , [])
    const services = useSelector(state => state.service.services) ;

    new DataTable('#dataTable') ;

    //! Delete service
    const handleDelete = ( id ) => {
        dispatch(deleteService(id)) ;
    }

    return (
        <React.Fragment>
            
            <Header/>
            <LeftSideBar/>

            <main id="main" className="main">
                <div class="pagetitle">
                    <h1> Services </h1>
                    <nav>
                        <ol class="breadcrumb">
                            <Link to={'/dashboard'} style={{ textDecoration:'none' }}> Home </Link>
                        </ol>
                    </nav>
                </div>

                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">

                            <table id='dataTable' className="table table-responsive-lg">
                                <thead>
                                    <tr>
                                        <td> # </td>
                                        <td> Service Name </td>
                                        <td> Subcategory Name </td>
                                        <td> Company Name </td>
                                        <td> City </td>
                                        <td> Price </td>
                                        <td width="14%"> Actions </td>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        services?.map((service , index) => 
                                        <tr key={index}>
                                            <th> { index + 1 } </th>
                                            <td> { service.service_name } </td>
                                            <td> { service.subcategory_id.subcategory_name } </td>
                                            <td> { service.company_id.companyName } </td>
                                            <td> { service.city } </td>
                                            <td> { service.price } MAD </td>
                                            <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                <button className='btn btn-outline-success'> <i className="fa-solid fa-eye"></i> </button>
                                                <Link to={`/services/update/${service._id}`}> <button className='btn btn-outline-primary'> <i className="fa-solid fa-edit"></i> </button> </Link>
                                                <button onClick={() => { handleDelete(service._id) }} className='btn btn-outline-danger'> <i className="fa-solid fa-trash"></i> </button> 
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
