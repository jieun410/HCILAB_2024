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
                <a href="/Home">Home</a>
                <a href="/Member">Member</a>
                <a href="/Publications">Publications</a>
                <a href="/Contact">Contact</a>
        </p>


        <div className='other'>
            <a className="login" href="/Login">Login</a>
            <a href="/search">
                <img className="search" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" alt='search'/>
            </a>
        </div>



    </div>
);
}

export default header;