import React from 'react' ;

function GreatProducts() {
    return (
        <React.Fragment>
            <section class="pt-3">
                <div class="container">
                    <div class="row gx-3">
                    <main class="col-lg-9">
                        <div class="card-banner p-5 bg-primary rounded-5" style={{height: "350px"}}>
                        <div style={{maxWidth: "500px"}}>
                            <h2 class="text-white">
                            Great products with <br />
                            best deals
                            </h2>
                            <p class="text-white">No matter how far along you are in your sophistication as an amateur astronomer, there is always one.</p>
                            <a href="/" class="btn btn-light shadow-0 text-primary"> View more </a>
                        </div>
                        </div>
                    </main>
                    <aside class="col-lg-3">
                        <div class="card-banner h-100 rounded-5" style={{backgroundColor: "#f87217"}}>
                        <div class="card-body text-center pb-5">
                            <h5 class="pt-5 text-white">Amazing Gifts</h5>
                            <p class="text-white">No matter how far along you are in your sophistication</p>
                            <a href="/" class="btn btn-outline-light"> View more </a>
                        </div>
                        </div>
                    </aside>
                    </div>
                </div>
            </section>
        
        </React.Fragment>
    )
}

export default GreatProducts ;
