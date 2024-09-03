import React from 'react';
import "./section2.css"

function section2() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

return (
    <div className='textbox'>
        <h2 className="title" color='white'>2024 HCI LAB 연구생 모집</h2>

        <div className='textbox_contents'>
            <p  align="center">모집 단위 및 대상 : 학부생, 석사, 박사과정 및 석박사 통합과정<br/> E-mail : easyeun21@cu.ac.kr <br/> 관심 있는 학생은 위 메일로 연락주시기 바랍니다</p>
        </div>
    </div>


        
);
}

export default section2;

