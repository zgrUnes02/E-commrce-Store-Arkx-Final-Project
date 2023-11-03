import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import AuthAxios from '../../helpers/request' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { deleteCompany, getAllCompanies } from '../../redux/companySlice';
import { Link } from 'react-router-dom';

function Companies() {

    const dispatch = useDispatch() ;
    const companies = useSelector(state => state.company.companies) ;

    //! UseEffect
    useEffect(() => {
        const getData = async () => {
            const response = await AuthAxios.get('http://localhost:4000/v1/companies') ;
            dispatch(getAllCompanies(response.data.docs)) ;
        }
        getData() ;
    } , [])

    //! Delete a company
    const [deleteMessage , setDeleteMessage] = useState() ;
    const deleteACompany = ( id ) => {
        AuthAxios.delete(`http://localhost:4000/v1/companies/${id}`)
        .then(response => {
            setDeleteMessage(response.data.message) ;
            dispatch(deleteCompany({id})) ;
        }).catch(error => console.log(error)) ;
    }

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" className="main">

                <div class="pagetitle">
                    <h1> Companies </h1>
                    <nav>
                        <ol class="breadcrumb">
                            <Link to={'/dashboard'} style={{ textDecoration:'none' }}> Home </Link>
                        </ol>
                    </nav>
                    {
                        deleteMessage && 
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong> Success : </strong> { deleteMessage }
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    }
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
                                        <th scope="col"> Company Name </th>
                                        <th scope="col"> Description </th>
                                        <th scope="col"> E-mail </th>
                                        <th scope="col"> City </th>
                                        <th scope="col" width="10%"> Actions </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        companies?.map((company , index) => 
                                            <tr key={index}>
                                                <th> { index + 1 } </th>
                                                <td> { company.companyName } </td>
                                                <td> { company.description } </td>
                                                <td> { company.email } </td>
                                                <td> { company.city } </td>
                                                <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                    <Link to={`/companies/update/${company._id}`}> <button className='btn btn-outline-primary'> <i className="fa-solid fa-edit"></i> </button> </Link>
                                                    <button onClick={() => { deleteACompany(company._id) }} className='btn btn-outline-danger'> <i className="fa-solid fa-trash"></i> </button>
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

export default Companies
