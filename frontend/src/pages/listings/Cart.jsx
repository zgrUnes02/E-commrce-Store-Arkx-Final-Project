import React, { useState } from 'react' ;

function Cart() {

    const [cart , setCart] = useState(JSON.parse(localStorage.getItem('cart'))) ;

    console.log(cart)

    return (
        <React.Fragment>
            
            <section className="h-100">

                <div className="container h-100 py-5">

                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-10">

                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                            </div>

                            {
                                cart?.map((product , index) => 
                                    <div className="card rounded-3 mb-4">

                                        <div className="card-body p-4">

                                            <div className="row d-flex justify-content-between align-items-center">

                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                    <img
                                                    src={product.product_image}
                                                    className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                </div>

                                                <div className="col-md-3 col-lg-3 col-xl-3">
                                                    <p className="lead fw-normal mb-2"> { product.product_name } </p>
                                                    <p> 
                                                        <span className="text-muted"> Size: </span> 
                                                        <select>
                                                            {
                                                                product.options?.map((option , index) => 
                                                                    <option value={option}> {option} </option>
                                                                )
                                                            }
                                                        </select>
                                                    </p>
                                                </div>

                                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                    <button className="btn btn-link px-2">
                                                        <i className="fas fa-minus"></i>
                                                    </button>

                                                    <input id="form1" min="0" name="quantity" value="2" type="number" className="form-control form-control-sm" />

                                                    <button className="btn btn-link px-2">
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </div>

                                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                    <h5 className="mb-0">$499.00</h5>
                                                </div>

                                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                    <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                )
                            }
 
                    
                            <div className="card">

                                <div className="card-body">

                                    <button type="button" className="btn btn-warning btn-block btn-lg"> Proceed to Pay </button>
                                
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </React.Fragment>
    )
}

export default Cart ;
