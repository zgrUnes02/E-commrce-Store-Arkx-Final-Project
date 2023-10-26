import React, { useEffect, useState } from 'react' ;
import axios from 'axios' ;
import { Link } from 'react-router-dom' ;
import Header from '../../layouts/Header';
import LeftSideBar from '../../layouts/LeftSideBar';
import AuthAxios from '../../helpers/request';

function Customers() {

    const [customers , setCustomers] = useState() ; 

    useEffect(() => {
        AuthAxios.get('http://localhost:4000/v1/customers')
        .then(response => setCustomers(response.data.docs))
        .catch(error => console.log(error)) ;
    } , [customers])

    return (
        <React.Fragment>

            <Header/>
            <LeftSideBar/>

            <main id="main" className="main">

            <div className="pagetitle">
                <h1> The Customers </h1>
                <nav>
                    <ol className="breadcrumb">
                        <Link to={'/'}>
                            <li className="breadcrumb-item">
                                Accueil
                            </li>
                        </Link>
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
                                    <th scope="col"> First Name </th>
                                    <th scope="col"> Last Name </th>
                                    <th scope="col"> Email </th>
                                    <th scope="col"> Active </th>
                                    <th scope="col"> Account Validation </th>
                                    <th scope="col"> Actions </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    customers?.map((customer , index) => 
                                        <tr key={index}>
                                            <td> { index + 1 } </td>
                                            <td> { customer.first_name } </td>
                                            <td> { customer.last_name } </td>
                                            <td> { customer.email } </td>
                                            { customer.active ? <td>active</td> : <td>inactive</td> }
                                            { customer.valid_account ? <td> valid account </td> : <td> invalid account </td> }
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

export default Customers ;
