import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import AuthAxios from '../../helpers/request' ;

function Subcategories() {

    const [subcategories , setSubcategories] = useState() ; 

    useEffect(() => {
        AuthAxios.get('http://localhost:4000/v1/subcategories')
        .then(response => setSubcategories(response.data.docs))
        .catch(error => console.log(error)) ;
    } , [subcategories])

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

            <div class="pagetitle">
                <h1> The Subcategories </h1>
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
                                    <th scope="col"> Subcategory Name </th>
                                    <th scope="col"> Category Name </th>
                                    <th scope="col"> Activation </th>
                                    <th scope="col" width="10%"> Actions </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    subcategories?.map((subcategory , index) => 
                                        <tr>
                                            <th> { index + 1 } </th>
                                            <td> { subcategory.subcategory_name } </td>
                                            <td> { subcategory.category_id.category_name } </td>
                                            { subcategory.active ? <td> Active </td> : <td> Inactive </td> }
                                            <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                <button className='btn btn-outline-success'> <i class="fa-solid fa-edit"></i> </button>
                                                <button className='btn btn-outline-danger'> <i class="fa-solid fa-trash"></i> </button>
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

export default Subcategories ;
