import React, { useEffect } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import AuthAxios from '../../helpers/request' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { deleteUser, getAllUsers, refreshUser } from '../../redux/userSlice' ;
import { Link } from 'react-router-dom' ;
import DataTable from 'datatables.net-dt' ;

function Users() {

    const dispatch = useDispatch() ;
    useEffect(() => { dispatch(getAllUsers()) } , [])
    const users = useSelector(state => state.user.users) ;

    new DataTable('#dataTable') ;

    //! Delete an user
    const deleteAnUser = ( id ) => {
        dispatch(deleteUser(id));
    }

    //! Block or unblock user 
    const blockOrUnblock = ( id ) => {
        AuthAxios.put(`http://localhost:4000/v1/users/block-unblock/${id}`)
        .then(response => {
            dispatch(refreshUser(response.data.blockOrUnblock)) ;
        }).catch(error => console.log(error)) ;
    }

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" className="main">

                <div class="pagetitle">
                    <h1> Users </h1>
                    <nav>
                        <ol class="breadcrumb">
                            <Link to={'/dashboard'} style={{ textDecoration:'none' }}> Home </Link>
                        </ol>
                    </nav>
                </div>

                <section className="section">
                    <div className="row">
                        <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">

                            <table id='dataTable' className="table table-responsive-lg">
                                <thead>
                                    <tr>
                                        <th scope="col"> # </th>
                                        <th scope="col"> First Name </th>
                                        <th scope="col"> Last Name </th>
                                        <th scope="col"> Username </th>
                                        <th scope="col"> Role </th>
                                        <th scope="col"> Email </th>
                                        <th scope="col"> Activation </th>
                                        <th scope="col" width="10%"> Actions </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        users?.map((user , index) => 
                                            <tr key={index}>
                                                <th> { index + 1 } </th>
                                                <td> { user.first_name } </td>
                                                <td> { user.last_name } </td>
                                                <td> { user.user_name } </td>
                                                <td> { user.role } </td>
                                                <td> { user.email } </td>
                                                { user.active ?  <td> <span className='badge bg-success'> Active </span> </td> : <td> <span className='badge bg-danger'> Blocked </span> </td> }
                                                <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                    <button onClick={() => { deleteAnUser(user._id) }} className='btn btn-outline-danger'> <i className="fa-solid fa-trash"></i> </button>
                                                    { 
                                                        user.active ? <button onClick={() => { blockOrUnblock(user._id) }} className='btn btn-outline-warning'> <i className="fa-solid fa-lock"></i> </button>  :
                                                        <button onClick={() => { blockOrUnblock(user._id) }} className='btn btn-outline-warning'> <i className="fa-solid fa-unlock"></i> </button>
                                                    }
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
