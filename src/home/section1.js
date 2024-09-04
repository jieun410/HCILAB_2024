import React from 'react';
import "./section1.css"

function section1() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

return (
    <div className="mainLogo">
            <img className="mainLogo_img" src={`${process.env.PUBLIC_URL}/img/logo.png`}/>
            <h1 className="mainLogo_text"> Human Computer Interaction(HCI) Lab </h1>
    </div>
);
}

export default section1;