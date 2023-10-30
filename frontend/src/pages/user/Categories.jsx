import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import AuthAxios from '../../helpers/request' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { getAllCategories } from '../../redux/categorySlice';
import { Link } from 'react-router-dom';

function Categories() {

    const categories = useSelector(state => state.category.categories) ;
    const dispatch = useDispatch() ;

    useEffect(() => {
        const getData = async () => {
            const response = await AuthAxios.get('http://localhost:4000/v1/categories') ;
            dispatch(getAllCategories(response.data.docs)) ;
        }
        getData()
    } , [])

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" className="main">

            <div class="pagetitle">
                <h1> Categories </h1>
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
                                    <th scope="col"> Category Name </th>
                                    <th scope="col"> Activation </th>
                                    <th scope="col" width="10%"> Actions </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    categories?.map((category , index) => 
                                        <tr key={index}>
                                            <th> { index + 1 } </th>
                                            <td> { category.category_name } </td>
                                            { category.active ? <td> Active </td> : <td> Inactive </td> }
                                            <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                <button className='btn btn-outline-success'> <i className="fa-solid fa-edit"></i> </button>
                                                <button className='btn btn-outline-danger'> <i className="fa-solid fa-trash"></i> </button>
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

export default Categories ;
