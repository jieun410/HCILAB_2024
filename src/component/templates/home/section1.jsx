import React from 'react';
import "./section1.css"

function section1() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

return (
    <div className="mainLogo">
        <div className='mains'>
            <img className="mainLogo_img" src={`${process.env.PUBLIC_URL}/img/logo.png`}/>
            <h1 className="mainLogo_text"> Human Computer Interaction(HCI) Lab </h1>
        </div>

        <a className='mainLogo_btn' href='/AboutUs'>About Us</a>
            
    </div>
);
}

export default section1;
