import React from 'react';
import './main.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";


function Main() {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div>
      <header>
        <div className="menubar">
          <a> 
            <img src={`${process.env.PUBLIC_URL}/img/menulogo.png`} alt="homepage" />
          </a>

          <nav className='abc'>
            <span href='C:\lab_24\f_lab\src\member.js' onClick={() => handleNavigation('/home')}>Home</span>
            <span onClick={() => handleNavigation('/member')}>Member</span>
            <span onClick={() => handleNavigation('/publications')}>publications</span>
            <span onClick={() => handleNavigation('/contact')}>Contact</span>
          </nav>
        </div>
    
        <div className="search">
            <img onClick={() => handleNavigation('/search')} src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"/>
        </div>
      </header>

      <main>
        <div className ="mainad">
          <nav>
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`}/>
              <h1> Human Computer Interaction(HCI) Lab </h1>
          </nav>
        </div>

        <div className='textbox'>
          <nav>
            <p>
              <h2 color='white'>2024 HCI LAB 연구생 모집</h2>
              
                <span>모집 단위 및 대상 : 학부생, 석사, 박사과정 및 석박사 통합과정</span>
                <span>E-mail : easyeun21@cu.ac.kr</span>
                <span>관심 있는 학생은 위 메일로 연락주시기 바랍니다</span>
            </p>
          </nav>
        </div>
        

      </main>   
    </div>
  );
}

export default Main;
