import React, { useEffect } from 'react' ;
import Header from '../../layouts/Header' ;
import LeftSideBar from '../../layouts/LeftSideBar' ;
import AuthAxios from '../../helpers/request' ;
import { useDispatch , useSelector } from 'react-redux' ;
import { getAllCompanies } from '../../redux/companySlice';

function Companies() {

    const dispatch = useDispatch() ;
    const companies = useSelector(state => state.company.companies) ;

    useEffect(() => {
        const getData = async () => {
            const response = await AuthAxios.get('http://localhost:4000/v1/companies') ;
            dispatch(getAllCompanies(response.data.docs)) ;
        }
        getData() ;
    } , [])

    return (
        <React.Fragment>
            <Header/>
            <LeftSideBar/>

            <main id="main" className="main">

            <div className="pagetitle">
                <h1> The Companies </h1>
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
                                    <th scope="col"> Company Name </th>
                                    <th scope="col"> Description </th>
                                    <th scope="col"> E-mail </th>
                                    <th scope="col" width="10%"> Actions </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    companies?.map((company , index) => 
                                        <tr key={index}>
                                            <th> { index + 1 } </th>
                                            <td> { company.companyName } </td>
                                            <td> { company.description } </td>
                                            <td> { company.email } </td>
                                            <td style={{ display:'flex' , justifyContent:'space-between' }}>
                                                <button className='btn btn-outline-primary'> <i className="fa-solid fa-edit"></i> </button>
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

export default Companies
