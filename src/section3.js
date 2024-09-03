import React from 'react';
import "./section3.css"

function section3() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

return (
    <div className='about'>
        <span>About Us</span>
        <div className='about_intro'>
            <span>저희 연구실은 사용자 최적의 경험을 위해 UI/UX를 개선하고 연구를 하며, 다양한 측면에서 문제를 찾아 개선할 수 있도록 개발하는 것을 목표로 하고 있습니다.</span>
        </div>

        <div className='research'>
            <span>Research Projects</span>
            <div className='research_intro'>
                <span> </span>
                <img></img>
            </div>
        </div>
    </div>


        
);
}

export default section3;

