import React from 'react' ;

function Checkout() {
    return (
        <React.Fragment>
            <div class="container">
                <div class="m-5">
                    <div class="col-md-5 col-12 ps-md-5 p-0">
                    <div>
                        <div class="row">
                        <p class="h7 fw-bold mb-1">Pay this Invoice</p>
                        <p class="text-muted h8 mb-2">Make payment for this invoice by filling in the details</p>
                        <div class="form">
                            <div class="row">

                                <div class="col-12">
                                    <div class="card border-0">
                                        <input class="form-control" type="text" placeholder="Card number"/>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <input class="form-control my-3" type="text" placeholder="MM/YY"/>
                                </div>

                                <div class="col-6">
                                    <input class="form-control my-3" type="text" placeholder="CVV"/>
                                </div>

                                <p class="p-blue h8 fw-bold mb-3">MORE PAYMENT METHODS</p>
                            </div>

                            <div class="btn btn-primary d-block h8">
                                PAY <span class="fas fa-dollar-sign ms-2"></span>1400<span class="ms-3 fas fa-arrow-right"></span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        </React.Fragment>
    )
}

export default Checkout ;
