import React, { useState } from 'react' ;
import { useDispatch, useSelector } from 'react-redux' ;
import { updateProfileInfo } from '../../redux/userSlice';

function EditInformation(props) {

    const dispatch = useDispatch() ;
    const success = useSelector(state => state.user.success) ;

    const [first_name , setFirst_name] = useState(props.currentUser.first_name) ;
    const [last_name , setLast_name] = useState(props.currentUser.last_name) ;
    const [user_name , setUser_name] = useState(props.currentUser.user_name) ;
    const [email , setEmail] = useState(props.currentUser.email) ;

    const changeUserInfo = (e) => {
        e.preventDefault() ;
        const data = {
            first_name ,
            last_name ,
            user_name ,
            email ,
        } ;
        dispatch(updateProfileInfo(data)) ;
    }

    return (
        <React.Fragment>

                {
                    success && 
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong> Update message : </strong> { success }
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }

            <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                <form onSubmit={changeUserInfo}>

                    <div className="row mb-3">
                        <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                        <div className="col-md-8 col-lg-9">
                            <img src="https://upload.wikimedia.org/wikipedia/en/d/db/Daryl_Dixon_Norman_Reedus.png" alt="Profile" />
                            <div className="pt-2">
                                <input name="profileImage" type="file" className="form-control" id="profileImage" />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label for="fullName" className="col-md-4 col-lg-3 col-form-label"> First Name </label>
                        <div className="col-md-8 col-lg-9">
                            <input onChange={(e) => setFirst_name(e.target.value)} name="firstName" type="text" className="form-control" id="firstName" value={ first_name } required/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label for="fullName" className="col-md-4 col-lg-3 col-form-label"> Last Name </label>
                        <div className="col-md-8 col-lg-9">
                            <input onChange={(e) => setLast_name(e.target.value)} name="lastName" type="text" className="form-control" id="lastName" value={ last_name } required/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label for="fullName" className="col-md-4 col-lg-3 col-form-label"> Username </label>
                        <div className="col-md-8 col-lg-9">
                            <input onChange={(e) => setUser_name(e.target.value)} name="userName" type="text" className="form-control" id="userName" value={ user_name } required/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                        <div className="col-md-8 col-lg-9">
                            <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" className="form-control" id="Email" value={ email } required/>
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                    
                </form>

            </div>
        </React.Fragment>
    )
}

export default EditInformation ;
