import React from 'react'

function Footer() {
    return (
        <React.Fragment>
            <footer class="text-center text-lg-start text-muted bg-primary mt-3">
                <section class="">
                    <div class="container text-center text-md-start pt-4 pb-4">
                    <div class="row mt-3">
                        <div class="col-12 col-lg-3 col-sm-12 mb-2">
                        <a href="https://mdbootstrap.com/" target="_blank" class="text-white h2">
                            AthelArkx
                        </a>
                        <p class="mt-1 text-white">
                            © 2023 Copyright : athelark.com
                        </p>
                        </div>

                        <div class="col-6 col-sm-4 col-lg-2">
                        <h6 class="text-uppercase text-white fw-bold mb-2">
                            Store
                        </h6>
                        <ul class="list-unstyled mb-4">
                            <li><a class="text-white-50" href="#">About us</a></li>
                            <li><a class="text-white-50" href="#">Find store</a></li>
                            <li><a class="text-white-50" href="#">Categories</a></li>
                            <li><a class="text-white-50" href="#">Blogs</a></li>
                        </ul>
                        </div>

                        <div class="col-6 col-sm-4 col-lg-2">
                        <h6 class="text-uppercase text-white fw-bold mb-2">
                            Information
                        </h6>
                        <ul class="list-unstyled mb-4">
                            <li><a class="text-white-50" href="#">Help center</a></li>
                            <li><a class="text-white-50" href="#">Money refund</a></li>
                            <li><a class="text-white-50" href="#">Shipping info</a></li>
                            <li><a class="text-white-50" href="#">Refunds</a></li>
                        </ul>
                        </div>

                        <div class="col-6 col-sm-4 col-lg-2">
                        <h6 class="text-uppercase text-white fw-bold mb-2">
                            Support
                        </h6>
                        <ul class="list-unstyled mb-4">
                            <li><a class="text-white-50" href="#">Help center</a></li>
                            <li><a class="text-white-50" href="#">Documents</a></li>
                            <li><a class="text-white-50" href="#">Account restore</a></li>
                            <li><a class="text-white-50" href="#">My orders</a></li>
                        </ul>
                        </div>

                        <div class="col-12 col-sm-12 col-lg-3">
                        <h6 class="text-uppercase text-white fw-bold mb-2">Newsletter</h6>
                        <p class="text-white">Stay in touch with latest updates about our products and offers</p>
                        <div class="input-group mb-3">
                            <input type="email" class="form-control border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                            <button class="btn btn-light border shadow-0" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                            Join
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </footer>
        </React.Fragment>
    )
}

export default Footer
