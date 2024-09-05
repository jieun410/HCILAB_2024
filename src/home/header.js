import { Link } from 'react-router-dom';
import React from 'react';
import "./header.css"

function header() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

return (
    <div className='menubar'>
        
        <a href="/home"><img src={`${process.env.PUBLIC_URL}/img/menulogo.png`} className="logo" alt="homepage" /></a> 
        
        <p className='menu'>
                <a href="/home">Home</a>
                <a href="/Member">Nember</a>
                <a href="/Publications">publications</a>
                <a href="/Contact">Contact</a>
        </p>

        <a href="/search">
            <img className="search" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" alt='search'/>
        </a>

        {/* <a href="/login">
            <img className="login" src="https://www.flaticon.com/kr/free-icons/ui" alt='login'/>
        </a> */}
    </div>
);
}

export default header;