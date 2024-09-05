import React, {Component} from "react";
import {BrowserRouter as BR, Routes, Route} from "react-router-dom";
import Header from "./home/header"
import Main from "./main";


const App = () => {
    return(
        <BR>
        <Header/>
            <Routes>
                <Route path="/home" element={<Main />}></Route>
            </Routes>
        </BR>
    )
}
export default App;