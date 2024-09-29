import React from "react";
import "./Student.css";
import "./StuIntro.css";

function Student() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

    return (
        <div className="Student_page">
            <div className="Student_banner">
                <h1>Student</h1>
            </div>

            <div className="Student_container">
                <div className="Student_img">
                    <img src={`${process.env.PUBLIC_URL}/img/stu1.jpg`} className="prof_img" alt="Professor" />
                </div>

                <div className="Studintro_container">
                    <div className="Stud_Name">
                        <div className="lineUp"></div> 
                        <span>Ji-Eun Lee</span>
                        <div className="lineDown"></div> 
                    </div>

                    <div className="Stud_intro">
                        <span className="email"> e-mail : easyeun21@cu.ac.kr<br/><br/></span>
                        {/* <span className="Stud"> Student <br/><br/></span> */}
                        <span> 대구가톨릭대학교 컴퓨터소프트웨어학부 게임공학전공<br/><br/><br/></span>
                        <span className="edu"> Education <br/><br/></span>
                        <span>
                            2021년 : 대구가톨릭대학교 모바일소프트웨어전공<br />
                            2022년 : 대구가톨릭대학교 게임공학전공(경과조치)<br />
                            2022년 2학기 : 대구가톨릭대학교 컴퓨터공학전공(복수전공)<br />
                        </span>
                        <span className="re"><br/>Research Area<br/><br/></span>
                        <span>HCI, BCI, UI/UX <br/><br/></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student;
