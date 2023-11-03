import React from 'react' ;

function ImageAndName(props) {
    return (
        <React.Fragment>

            <div class="col-xl-4">

                <div class="card">
                    
                    <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

                        <img src="https://upload.wikimedia.org/wikipedia/en/d/db/Daryl_Dixon_Norman_Reedus.png" alt="Profile" class="rounded-circle" />
                        <h2> { props.currentUser.first_name } { props.currentUser.last_name } </h2>
                        <h3> { props.currentUser.role } </h3>

                    </div>
                </div>

            </div>
            
        </React.Fragment>
    )
}

export default ImageAndName ;
