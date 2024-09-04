import React from 'react';
import "./header.css"

function header() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

return (
    <div className='menubar'>
        
        <img src={`${process.env.PUBLIC_URL}/img/menulogo.png`} className="logo" alt="homepage" />
        
        <nav className='menu'>
            <span onClick={() => handleNavigation('/home')}>Home</span>
            <span onClick={() => handleNavigation('/member')}>Member</span>
            <span onClick={() => handleNavigation('/publications')}>publications</span>
            <span onClick={() => handleNavigation('/contact')}>Contact</span>
        </nav>
        <div >
            <img className="search" onClick={() => handleNavigation('/search')} src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
        </div>
        
    </div>
);
}

export default header;