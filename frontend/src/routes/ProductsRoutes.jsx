import React from 'react' ;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from '../components/productsPage/productsPage';


function ProductsRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/ProductsSidebar' element={<ProductsPage/>} />
            </Routes>
        </Router>
    )
}

export default ProductsRoutes;