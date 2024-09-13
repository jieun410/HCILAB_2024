import React from "react";
import Professor from "./members/Professor";
import ProfName from "./members/ProfName";
import People from "./members/People";
import "./main.css";


function member() {
    return (
        <>
        <Professor/>
        <ProfName/>
        {/* <People/> */}
        </>
    );
}

export default member;
