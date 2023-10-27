import React from 'react'
import Header from '../../layouts/Header'
import LeftSideBar from '../../layouts/LeftSideBar'

function Companies() {
    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

            <div class="pagetitle">
                <h1> The Companies </h1>
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
                                    <th scope="col"> Company Name </th>
                                    <th scope="col"> Description </th>
                                    <th scope="col"> E-mail </th>
                                    <th scope="col" width="10%"> Actions </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th> 1 </th>
                                    <td> 2 </td>
                                    <td> 3 </td>
                                    <td> 4 </td>
                                    <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                        <button className='btn btn-outline-primary'> <i class="fa-solid fa-edit"></i> </button>
                                        <button className='btn btn-outline-danger'> <i class="fa-solid fa-trash"></i> </button>
                                    </td>
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

export default Companies
