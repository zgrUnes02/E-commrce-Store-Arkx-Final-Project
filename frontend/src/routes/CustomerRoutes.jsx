import React from 'react' ;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerLogin from '../pages/customer/CustomerLogin';

function CustomerRoute() 
{
    return (
      <Router>
        <Routes>
          <Route path='/login' element={<CustomerLogin/>} />
        </Routes>
      </Router>
    )
  }
  
  export default CustomerRoute;
  
  
  
            
            
   
            
