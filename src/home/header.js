import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className='menubar'>
            <Link to="/home">
                <img src={`${process.env.PUBLIC_URL}/img/menulogo.png`} className="logo" alt="homepage" />
            </Link>

            <nav className='menu'>
                <ul>
                    <li>
                        <Link to="/home" className={currentPath === "/home" ? "active" : ""}>Home</Link>
                    </li>
                    <li>
                        <Link to="/member" className={currentPath === "/member" ? "active" : ""}>Member</Link>
                        {/* <ul className='submenu'>
                            <li><Link to='/professor' className={currentPath === '/professor' ? "active" : ""}>Professor</Link></li>
                            <li><Link to='/people' className={currentPath === '/people' ? "active" : ""}>People</Link></li>
                        </ul> */}
                    </li>
                    <li>
                        <Link to="/publications" className={currentPath === "/publications" ? "active" : ""}>Publications</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={currentPath === "/contact" ? "active" : ""}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='other'>
                <Link className="login" to="/login">Login</Link>
                <Link to="/search">
                    <img className="search" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" alt='search'/>
                </Link>
            </div>
        </div>
    );
}

export default Header;
