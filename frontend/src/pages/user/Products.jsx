import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import AuthAxios from '../../helpers/request' ;

function Products() {

    const [products , setProducts] = useState() ; 

    useEffect(() => {
        AuthAxios.get('http://localhost:4000/v1/products')
        .then(response => setProducts(response.data.docs))
        .catch(error => console.log(error)) ;
    } , [products])

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

            <div class="pagetitle">
                <h1> The Products </h1>
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
                                    <th scope="col"> Product Name </th>
                                    <th scope="col"> Subcategory Name </th>
                                    <th scope="col"> Price </th>
                                    <th scope="col"> Activation </th>
                                    <th scope="col" width="14%"> Actions </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    products?.map((product , index) => 
                                    <tr>
                                        <th> { index + 1 } </th>
                                        <td> { product.product_name } </td>
                                        <td> { product.subcategory_id.subcategory_name } </td>
                                        <td> { product.price } MAD </td>
                                        { product.active ? <td> Active </td> : <td> Inactive </td> }
                                        <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                            <button className='btn btn-outline-success'> <i class="fa-solid fa-eye"></i> </button>
                                            <button className='btn btn-outline-primary'> <i class="fa-solid fa-edit"></i> </button>
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

export default Products ;
