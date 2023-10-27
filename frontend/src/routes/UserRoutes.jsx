import React from 'react' ;
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom' ;
import Customers from '../pages/user/Customers';
import Companies from '../pages/user/Companies';
import Products from '../pages/user/Products';
import Categories from '../pages/user/Categories';
import Subcategories from '../pages/user/Subcategories';
import Orders from '../pages/user/Orders';
import Users from '../pages/user/Users';

function UserRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/customers' element={<Customers/>} />
        <Route path='/companies' element={<Companies/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/subcategories' element={<Subcategories/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/users' element={<Users/>} />
      </Routes>
    </Router>
  )
}

export default UserRoutes ;

