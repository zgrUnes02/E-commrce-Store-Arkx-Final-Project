import React from 'react' ;

function Overview() {
    return (
        <React.Fragment>

            <div class="tab-pane fade show active profile-overview" id="profile-overview">
                
                <h5 class="card-title">Profile Details</h5>

                <div class="row">
                    <div class="col-lg-3 col-md-4 label "> First Name </div>
                    <div class="col-lg-9 col-md-8">Kevin Anderson</div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-4 label "> Last Name </div>
                    <div class="col-lg-9 col-md-8">Kevin Anderson</div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-4 label "> Username </div>
                    <div class="col-lg-9 col-md-8">Kevin Anderson</div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-4 label">Email</div>
                    <div class="col-lg-9 col-md-8">k.anderson@example.com</div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-4 label"> Role </div>
                    <div class="col-lg-9 col-md-8"> Admin </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default Overview ;
