import React from 'react' ;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

function LandingPageRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' Component={<LandingPage/>} />
            </Routes>
        </Router>
    )
}

export default LandingPageRoutes ;
