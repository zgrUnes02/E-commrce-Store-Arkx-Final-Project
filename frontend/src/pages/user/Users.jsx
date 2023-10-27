import React from 'react'
import Header from '../../layouts/Header'
import LeftSideBar from '../../layouts/LeftSideBar'

function Users() {
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
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th> 1 </th>
                                    <td> 2 </td>
                                    <td> 3 </td>
                                    <td> 4 </td>
                                    <td> 4 </td>
                                    <td> 4 </td>
                                    <td> 4 </td>
                                </tr>
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
