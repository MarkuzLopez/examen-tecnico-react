import React from 'react';
import { Link } from 'react-router-dom';
import  logohead from '../assets/img/logohead.png'

const Header = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <Link className="navbar-brand" to={"/"} >
                 <img src={logohead} width="250" height="60" className="d-inline-block align-top" alt="" />
                </Link> 
            </nav>
        </div>
     );
}
 
export default Header;