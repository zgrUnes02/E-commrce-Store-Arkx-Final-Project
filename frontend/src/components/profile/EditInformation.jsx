import React from 'react' ;

function EditInformation() {
    return (
        <React.Fragment>

            <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

                <form>

                    <div class="row mb-3">
                        <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                        <div class="col-md-8 col-lg-9">
                            <img src="https://upload.wikimedia.org/wikipedia/en/d/db/Daryl_Dixon_Norman_Reedus.png" alt="Profile" />
                            <div class="pt-2">
                                <input name="profileImage" type="file" class="form-control" id="fullName" />
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="fullName" class="col-md-4 col-lg-3 col-form-label"> First Name </label>
                        <div class="col-md-8 col-lg-9">
                            <input name="fullName" type="text" class="form-control" id="fullName" value="Kevin Anderson" />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="fullName" class="col-md-4 col-lg-3 col-form-label"> Last Name </label>
                        <div class="col-md-8 col-lg-9">
                            <input name="fullName" type="text" class="form-control" id="fullName" value="Kevin Anderson" />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="fullName" class="col-md-4 col-lg-3 col-form-label"> Username </label>
                        <div class="col-md-8 col-lg-9">
                            <input name="fullName" type="text" class="form-control" id="fullName" value="Kevin Anderson" />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                        <div class="col-md-8 col-lg-9">
                            <input name="email" type="email" class="form-control" id="Email" value="k.anderson@example.com" />
                        </div>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn btn-primary">Save Changes</button>
                    </div>
                    
                </form>

            </div>
        </React.Fragment>
    )
}

export default EditInformation ;
