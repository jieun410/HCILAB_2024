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

            <div className='menu'>
                <nav>
                    <ul>
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/Member">Member</a>
                            <ul>
                            <li><a href="/Member">Professor</a></li>
                            <li><a href="/Student">Student</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/Publications">Publications</a>
                        </li>
                        <li>
                            <a href="Contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>

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
