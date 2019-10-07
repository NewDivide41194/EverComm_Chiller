import React from 'react'
import * as Colors from '../../assets/everCommColors'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div>
            <div className='navbar'>
                                  <img src={process.env.PUBLIC_URL + '/icons/everCommLogo.png'} style={{ height: 35 }} alt='logo' />
                
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                    <i className="fa fa-bell p-2" style={{ color: 'white' }} />
</Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{width:40}}>
                        <Link className="dropdown-item" href="#">Chiller 1 has stopped due to high temperature</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Change Plant</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Switch to Light Mode</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Logout</Link>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-light font-weight-bold" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Super Admin Kr</Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" href="#">Account Setting</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Change Plant</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Switch to Light Mode</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" href="#">Logout</Link>
                    </div>
                </li>

            </div>
        </div>

    )
}
export default NavBar