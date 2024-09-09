import React from 'react';
import "./LabIntro1.css";


function LabIntro1() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

return (
    <div className="HCI">
        <div className="Lab">
            <h1>About Us</h1>
        </div>
        <img
            className="hciimg"
            src={`${process.env.PUBLIC_URL}/img/HCI.jpg`}
            alt="HCI"
        />
        <div className="hci_intro">
            <span>
                HCI(Human-Computer Interaction)는 인간과 컴퓨터 간의 상호작용에
                대해 연구하는 학문 분야입니다. 따라서, 저희 연구실은 사용자 최적의 경험을 위해 UI/UX를
                개선하고 연구를 하며, 다양한 측면에서 문제를 찾아 개선할 수 있도록
                개발하는 것을 목표로 하고 있습니다.
            </span>
        </div>
    </div>
);
}

export default LabIntro1;
