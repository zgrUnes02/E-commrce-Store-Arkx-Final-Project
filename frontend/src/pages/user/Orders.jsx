import React from 'react'
import Header from '../../layouts/Header'
import LeftSideBar from '../../layouts/LeftSideBar'

function Orders() {
    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

            <div class="pagetitle">
                <h1> The Orders </h1>
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
                                    <th scope="col"> Customer Name </th>
                                    <th scope="col"> Product Name </th>
                                    <th scope="col"> Quantity </th>
                                    <th scope="col"> Status </th>
                                    <th scope="col"> Actions </th>
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

export default Orders ;
