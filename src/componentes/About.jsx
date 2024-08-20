import React from "react";
import meImg from "./assets/me-removebg-preview.png";

function About(){
    
    return <div className="about">
    <div>
        <img className="aboutImg" src={meImg} alt="Me"></img>
    </div>
    <div>
        <h2 className="aboutName">ANDRES PERDOMO</h2>
        <p className="aboutTitle">FRONTEND DEVELOPER</p>
        <p className="aboutText">Hi, I’m Andres a frontend developer based in Germany.</p>
    </div>
        
    </div>
}

export default About;