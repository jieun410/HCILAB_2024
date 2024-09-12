import React, {Component} from "react";
import {BrowserRouter as BR, Routes, Route} from "react-router-dom";
import Header from "./home/header"
import Main from "./main";
import AboutUs from "./AboutUs"
import Member from "./member"


const App = () => {
    return(
        <BR>
        <Header/>
            <Routes>
                <Route path="/home" element={<Main />}></Route>
                <Route path="/AboutUs" element={<AboutUs />}></Route>
                <Route path="/Member" element={<Member />}></Route>
            </Routes>
        </BR>
    )
}
export default App;