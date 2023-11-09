import React, { useEffect, useState } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { deleteCategory, getAllCategories } from '../../redux/categorySlice';
import { Link } from 'react-router-dom';

function Categories() {

    
    const dispatch = useDispatch() ;

        const categories = useSelector(state => state.category.categories);

    //! useEffect Hook 
    useEffect(() => {
        dispatch(getAllCategories()) ;
    } , [])

   console.log(categories)


    //! Delete Category
    const [deleteMessage , setDeleteMessage] = useState() ;
    const handleDelete = ( id ) => {
        dispatch(deleteCategory(id)).then(response => {
            if ( response.payload.message ) {
                setDeleteMessage(response.payload.message)
            }
        }) ;
    } ;

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" className="main">

            <div class="pagetitle">
                <h1> Categories </h1>
                <nav>
                    <ol class="breadcrumb">
                        <Link to={'/dashboard'} style={{ textDecoration:'none' }}> Home </Link>
                    </ol>
                </nav>
                {
                    deleteMessage && 
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong> Success : </strong> { deleteMessage }
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
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
                                    categories.map((category , index) => 
                                        <tr key={index}>
                                            <th> { index + 1 } </th>
                                            <td> { category.category_name } </td>
                                            { category.active ? <td> <span className='badge bg-success' > Active </span> </td> : <td> <span className='badge bg-danger'> Inactive </span> </td> }
                                            <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                <Link to={`/category/update/${category._id}`}> <button className='btn btn-outline-success'> <i className="fa-solid fa-edit"></i> </button> </Link>
                                                <button onClick={() => {handleDelete(category._id)}} className="btn btn-outline-danger" > <i className="fa-solid fa-trash"></i> </button>
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
