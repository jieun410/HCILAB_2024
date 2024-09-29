import React from "react";
import "./Publication.css";

function Publication() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

    return (
        <div className="Publication_page">
            <div className="Publication_banner">
                <h1>Publications</h1>
            </div>
        </div>
    );
}

export default Publication;
