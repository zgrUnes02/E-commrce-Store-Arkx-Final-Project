import React from 'react' ;
import { Link } from 'react-router-dom' ;

function LeftSideBar() {
    return (
        <React.Fragment>
            <aside id="sidebar" class="sidebar">

            <ul class="sidebar-nav" id="sidebar-nav">
                
                <li class="nav-item">
                    <a class="nav-link collapsed" href="/">
                        <i class="fa-solid fa-house"></i>
                        <span> Dashboard </span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="{{route('showVisitor')}}">
                        <i class="fa-solid fa-users"></i>
                        <span> Users </span>
                    </a>
                </li>

                <li class="nav-item">
                    <Link to={'/customers'}>
                        <div class="nav-link collapsed">
                            <i class="fa-solid fa-users"></i>
                            <span> Customers </span>
                        </div>
                    </Link>
                </li>

                <li class="nav-item">
                    <Link to={'/companies'}>
                        <div class="nav-link collapsed">
                            <i class="fa-solid fa-users"></i>
                            <span> Companies </span>
                        </div>
                    </Link>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="{{route('showVisitor')}}">
                        <i class="fa-solid fa-users"></i>
                        <span> Products </span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="{{route('showVisitor')}}">
                        <i class="fa-solid fa-users"></i>
                        <span> Orders </span>
                    </a>
                </li>

            </ul>

            </aside>
        </React.Fragment>
    )
}

export default LeftSideBar ;
