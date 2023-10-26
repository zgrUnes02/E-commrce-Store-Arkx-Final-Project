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
                <nav>
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{route('dashboard')}}"> Accueil </a></li>
                
                    </ol>
                </nav>
            </div>

            <section class="section">
                <div class="row">
                    <div class="col-lg-12">

                    <div class="card">
                        <div class="card-body">

                        <table class="table text-center table-responsive-lg">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Sujet</th>
                                    <th scope="col">Processe</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th> 1 </th>
                                    <td> 2 </td>
                                    <td> 3 </td>
                                    <td> 4 </td>
                                    <td>
                                        <a href="{{route('delete.message' , $message -> id)}}" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></a>
                                        <a href="{{route('show.message' , $message -> id)}}" class="btn btn-outline-success"> <i class="fa-solid fa-eye"></i> </a>
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
