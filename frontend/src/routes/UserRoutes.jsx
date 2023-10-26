import React from 'react' ;
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom' ;
import UserLogin from '../pages/user/UserLogin';
import UserRegister from '../pages/user/UserRegister';
import Customers from '../pages/user/Customers';
import Companies from '../pages/user/Companies';

function UserRoutes() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/user-login' element={<UserLogin/>} />
        <Route path='/user-register' element={<UserRegister/>} /> */}
        <Route path='/customers' element={<Customers/>} />
        <Route path='/companies' element={<Companies/>} />
      </Routes>
    </Router>
  )
}

export default UserRoutes ;

