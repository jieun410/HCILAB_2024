import React from 'react';
import "./section3.css"

function section3() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

return (
    <div className='about'>
        {/* <span>About Us</span>
        <div className='about_intro'>
            <span>저희 연구실은 사용자 최적의 경험을 위해 UI/UX를 개선하고 연구를 하며, 다양한 측면에서 문제를 찾아 개선할 수 있도록 개발하는 것을 목표로 하고 있습니다.</span>
        </div> */}

        <div className='research'>
            <span>Research Projects</span>

            <div className='projectList'>
                <div className='research_title'>
                    <span> 1. 대면 상담 대비 상담 효과 및 사용성 향상이 가능한 비대면 상담 플랫폼 구축 (맥파 정보와 미세표정 등 숨길 수 없는 지표를 활용하는 내담자 감정 상태 분석 시스템)</span>
                </div>
                <div>
                    <img className="research_img" src={`${process.env.PUBLIC_URL}/img/chick.jpg`} align="left" alt="project1"/>
                    <div className='research_text'>
                        <span>🐤 너는 오리니? 메추리니? 닭이니? 청둥오리니?</span>
                    </div>
                </div>
                </div>
            </div>    
        </div>



        
);
}

export default section3;

