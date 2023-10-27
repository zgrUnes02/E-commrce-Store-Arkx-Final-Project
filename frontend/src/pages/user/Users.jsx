import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import AuthAxios from '../../helpers/request' ;

function Users() {

    const [users , setUsers] = useState() ; 

    useEffect(() => {
        AuthAxios.get('http://localhost:4000/v1/users')
        .then(response => setUsers(response.data.docs))
        .catch(error => console.log(error)) ;
    } , [users])

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

            <div class="pagetitle">
                <h1> The Users </h1>
            </div>

            <section class="section">
                <div class="row">
                    <div class="col-lg-12">

                    <div class="card">
                        <div class="card-body">

                        <table class="table text-center table-responsive-lg">
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
                                        <tr>
                                            <th> { index + 1 } </th>
                                            <td> { user.first_name } </td>
                                            <td> { user.last_name } </td>
                                            <td> { user.user_name } </td>
                                            <td> { user.role } </td>
                                            <td> { user.email } </td>
                                            { user.active ?  <td> Active </td> : <td> Inactive </td> }
                                            <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                <button className='btn btn-outline-success'> <i class="fa-solid fa-edit"></i> </button>
                                                <button className='btn btn-outline-danger'> <i class="fa-solid fa-trash"></i> </button>
                                                <button className='btn btn-outline-warning'> <i class="fa-solid fa-lock"></i> </button>
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
