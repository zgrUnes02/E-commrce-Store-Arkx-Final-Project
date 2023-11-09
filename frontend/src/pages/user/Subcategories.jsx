import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { useDispatch, useSelector } from 'react-redux' ;
import { Link } from 'react-router-dom';
import { deleteSubcategory, getAllSubcategories } from '../../redux/subcategorySlice';

function Subcategories() {

    const dispatch = useDispatch() ;
    const subcategories = useSelector(state => state.subcategory.subcategories) ; 
    const [deleteMessage , setDeleteMessage] = useState() ;

    useEffect(() => {
        dispatch(getAllSubcategories()) ;
    } , [])

    //! Delete subcategory
    const handleDelete = ( id ) => {
        dispatch(deleteSubcategory(id)).then(response => {
            if ( response.payload.message ) {
                setDeleteMessage(response.payload.message) ;
            }
        }) ;
    }

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" class="main">

                <div class="pagetitle">
                    <h1> Subcategories </h1>
                    <nav>
                        <ol class="breadcrumb">
                            <Link to={'/dashboard'} style={{ textDecoration:'none' }}> Home </Link>
                        </ol>
                    </nav>
                    {/* Show alert when user delete */}
                {
                    deleteMessage && 
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong> Success : </strong> { deleteMessage }
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
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
                                            <tr key={index}>
                                                <th> { index + 1 } </th>
                                                <td> { subcategory.subcategory_name } </td>
                                                <td> { subcategory.category_id.category_name } </td>
                                                { subcategory.active ? <td> <span className='badge bg-success'> Active </span>  </td> : <td> <span className='badge bg-danger'> Inactive </span> </td> }
                                                <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                    <Link to={`/subcategories/update/${subcategory._id}`}> <button className='btn btn-outline-success'> <i class="fa-solid fa-edit"></i> </button> </Link>
                                                    <button onClick={() => handleDelete(subcategory._id)} className='btn btn-outline-danger'> <i class="fa-solid fa-trash"></i> </button>
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
