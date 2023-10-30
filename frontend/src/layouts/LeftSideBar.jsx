import React from 'react' ;
import { Link } from 'react-router-dom' ;

function LeftSideBar() {
    return (
        <React.Fragment>
            <aside id="sidebar" class="sidebar">

            <ul class="sidebar-nav" id="sidebar-nav">
                
                <Link to={'/dashboard'} style={{ textDecoration:'none' }}>
                <li class="nav-item">
                    <a class="nav-link collapsed">
                        <i class="fa-solid fa-house"></i>
                        <span> Dashboard </span>
                    </a>
                </li>
                </Link>

                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#category" data-bs-toggle="collapse" href="/">
                    <i class="fa-solid fa-trash"></i><span> Categories </span><i class="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="category" class="nav-content collapse " data-bs-parent="#sidebar-nav">

                        <Link style={{ textDecoration:'none' }} to={'/categories/create'}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> Create new category </span>
                        </li>
                        </Link>

                        <Link to={'/categories'} style={{ textDecoration:'none' }}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> List of categories </span>
                        </li>
                        </Link>
                        
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#subcategory" data-bs-toggle="collapse" href="/">
                    <i class="fa-solid fa-trash"></i><span> Subcategories </span><i class="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="subcategory" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                        
                        <Link style={{ textDecoration:'none' }} to={'/subcategories/create'}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> Create new subcategory </span>
                        </li>
                        </Link>

                        <Link to={'/subcategories'} style={{ textDecoration:'none' }}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> List of subcategories </span>
                        </li>
                        </Link>

                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#products" data-bs-toggle="collapse" href="/">
                    <i class="fa-solid fa-trash"></i><span> Products </span><i class="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="products" class="nav-content collapse " data-bs-parent="#sidebar-nav">

                        <Link style={{ textDecoration:'none' }} to={'/products/create'}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> Create new product </span>
                        </li>
                        </Link>

                        <Link to={'/products'} style={{ textDecoration:'none' }}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> List of products </span>
                        </li>
                        </Link>

                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#services" data-bs-toggle="collapse" href="/">
                    <i class="fa-solid fa-trash"></i><span> Services </span><i class="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="services" class="nav-content collapse " data-bs-parent="#sidebar-nav">

                        <Link style={{ textDecoration:'none' }} to={'/services/create'}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> Create new service </span>
                        </li>
                        </Link>

                        <Link to={'/services'} style={{ textDecoration:'none' }}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> List of services </span>
                        </li>
                        </Link>

                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#users" data-bs-toggle="collapse" href="/">
                    <i class="fa-solid fa-trash"></i><span> Users </span><i class="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="users" class="nav-content collapse " data-bs-parent="#sidebar-nav">

                        <Link style={{ textDecoration:'none' }} to={'/users/create'}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> Create new user </span>
                        </li>
                        </Link>

                        <Link to={'/users'} style={{ textDecoration:'none' }}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> List of users </span>
                        </li>
                        </Link>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#customers" data-bs-toggle="collapse" href="/">
                    <i class="fa-solid fa-trash"></i><span> Customers </span><i class="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="customers" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <Link to={'/customers'} style={{ textDecoration:'none' }}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> List of customers </span>
                        </li>
                        </Link>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#companies" data-bs-toggle="collapse" href="/">
                    <i class="fa-solid fa-trash"></i><span> Companies </span><i class="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="companies" class="nav-content collapse " data-bs-parent="#sidebar-nav">

                        <Link style={{ textDecoration:'none' }} to={'/companies/create'}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> Create new company </span>
                        </li>
                        </Link>

                        <Link to={'/companies'} style={{ textDecoration:'none' }}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> List of companies </span>
                        </li>
                        </Link>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" data-bs-target="#orders" data-bs-toggle="collapse" href="/">
                    <i class="fa-solid fa-trash"></i><span> Orders </span><i class="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="orders" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <Link to={'/orders'} style={{ textDecoration:'none' }}>
                        <li style={{ display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
                            <i class="fa-solid fa-circle"></i><span> List of orders </span>
                        </li>
                        </Link>
                    </ul>
                </li>

            </ul>

            </aside>
        </React.Fragment>
    )
}

export default LeftSideBar ;
