import React from 'react' ;
import { Link, useNavigate } from 'react-router-dom' ;
import logo from '../../src/assets/Athleark.png' ;

function Header() {

    const navigate = useNavigate() ;

    const logout = () => {
        localStorage.clear() ;
        navigate('/') ;
    }

    return (
      <React.Fragment>

        <header id="header" class="header fixed-top d-flex align-items-center">
          <div class="d-flex align-items-center justify-content-between">
            <a href="/" class="logo d-flex align-items-center">
              <img src={logo} alt="logo" />
              <span class="d-none d-lg-block"></span>
            </a>
          </div>

          <nav class="header-nav ms-auto">
            <ul class="d-flex align-items-center">

              <li class="nav-item dropdown pe-3">
                <a
                  class="nav-link nav-profile d-flex align-items-center pe-0"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  <span class="d-none d-md-block dropdown-toggle ps-2">
                    <i class="fa-regular fa-user"></i>
                  </span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li class="dropdown-header">
                    <h6> Youness Zagouri </h6>
                    <span></span>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                      <Link style={{ textDecoration:'none' }} to={'/profile'}>
                        <button
                          type="submit"
                          class="dropdown-item d-flex align-items-center"
                        >
                          <i class="bi bi-person"></i>
                          <span> My profile </span>
                        </button>
                      </Link>
                  </li>
                  <li>
                    <form
                      class="col"
                      method="POST"
                      action="{{ URL('/logout') }}"
                    >
                      <button onClick={logout}
                        type="submit"
                        class="dropdown-item d-flex align-items-center"
                      >
                        <i class="bi bi-box-arrow-right"></i>
                        <span> Log out </span>
                      </button>
                    </form>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>

      </React.Fragment>

    );
}

export default Header ;