import React from "react";
import "./Professor.css";
import "./ProfName.css";

function Professor() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

    return (
        <div className="Professor_page">
            <div className="professor_banner">
                <h1>Professor</h1>
            </div>
            <div className="Professor_container">
                <div className="Professor_img">
                    <img src={`${process.env.PUBLIC_URL}/img/prof.jpg`} className="prof_img" alt="Professor" />
                </div>

                <div className="profintro_container">
                    <div className="Prof_Name">
                        <div className="lineUp"></div> 
                        <span>Jeong-Hoon Shin</span>
                        <div className="lineDown"></div> 
                    </div>

                    <div className="prof_intro">
                        <span className="email"> e-mail : only4you@cu.ac.kr<br/><br/></span>
                        <span className="pro"> professor <br/><br/></span>
                        <span> 대구가톨릭대학교 컴퓨터소프트웨어학부<br/><br/><br/></span>
                        <span className="edu"> Education <br/><br/></span>
                        <span>
                            1992년 : 성균관대학교 전자공학과(공학사)<br />
                            1994년 : 성균관대학교 대학원 전자공학과(공학석사)<br />
                            2005년 : 성균관대학교 대학원 전기 전자 및 컴퓨터공학과 (공학박사)<br />
                        </span>
                        <span className="emp"><br/><br/>Employment<br/><br/></span>
                        <span>
                            1994년 : SKC 중앙연구소<br />
                            1995년 ~ 2002년 : DACOM 종합연구소<br />
                            2006년 ~ 현재 : 대구가톨릭대학교 컴퓨터소프트웨어학부 교수<br/><br/>
                        </span>
                        <span className="re"><br/>Research Area<br/><br/></span>
                        <span>HCI, BCI, 오감정보처리<br/><br/></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Professor;
