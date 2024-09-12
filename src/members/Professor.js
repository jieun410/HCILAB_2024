import React from "react";
import "./Professor.css";

function Professor() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

    return (
        <div className="Professor_page">
            <div className="professor_banner">
                <h1>Professor</h1>
            </div>
        </div>
    );
    }

export default Professor;
