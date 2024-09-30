import React, {Component} from "react";
import {BrowserRouter as BR, Routes, Route} from "react-router-dom";
import Header from "./component/templates/home/header";
import Main from "./pages/main";
import AboutUs from "./pages/AboutUs";
import Member from "./pages/member";
import Signin from "./component/templates/Authority/Signin";
import Student from "./component/templates/members/Student";
import Professor from "./component/templates/members/Professor";
import Publication from "./component/templates/Publications/Publication";
import LabIntro1 from "./component/templates/AboutUs/LabIntro1"


const App = () => {
    return (
        <BR>
            <Header />
            <Routes>
            <Route path="/home" element={<Main />}></Route>
            <Route path="/AboutUs" element={<AboutUs />}></Route>
            <Route path="/Member" element={<Member />}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
            <Route path="/Student" element={<Student />}></Route>
            <Route path="/Professor" element={<Professor />}></Route>
            <Route path="/Publication" element={<Publication/>}></Route>
            </Routes>
        </BR>
    );
}
export default App;

