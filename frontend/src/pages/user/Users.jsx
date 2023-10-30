import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import AuthAxios from '../../helpers/request' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { getAllUsers } from '../../redux/userSlice';
import { Link } from 'react-router-dom';

function Users() {

    const dispatch = useDispatch() ;
    const users = useSelector(state => state.user.users) ;

    useEffect(() => {
        const getData = async () => {
            const response = await AuthAxios.get('http://localhost:4000/v1/users') ;
            dispatch(getAllUsers(response.data.docs)) ;
        }
        getData() ;
    } , [])

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" className="main">

                <div class="pagetitle">
                    <h1> Users </h1>
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
                                        <th scope="col"> First Name </th>
                                        <th scope="col"> Last Name </th>
                                        <th scope="col"> Username </th>
                                        <th scope="col"> Role </th>
                                        <th scope="col"> Email </th>
                                        <th scope="col"> Activation </th>
                                        <th scope="col"> Actions </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        users?.map((user , index) => 
                                            <tr key={index}>
                                                <th> { index + 1 } </th>
                                                <td> { user.first_name } </td>
                                                <td> { user.last_name } </td>
                                                <td> { user.user_name } </td>
                                                <td> { user.role } </td>
                                                <td> { user.email } </td>
                                                { user.active ?  <td> Active </td> : <td> Inactive </td> }
                                                <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                    <button className='btn btn-outline-success'> <i className="fa-solid fa-edit"></i> </button>
                                                    <button className='btn btn-outline-danger'> <i className="fa-solid fa-trash"></i> </button>
                                                    <button className='btn btn-outline-warning'> <i className="fa-solid fa-lock"></i> </button>
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

export default Users ;
