import React, {useState} from "react";




function NaVBar(){
    
    function getButton(){
        let Buttonseleccted = document.getElementById("listSection");
        console.log(Buttonseleccted)
    }

    return <div className="navBar">
        <div className="navBrand ">
            <p className="brand">NDRS</p>
        </div>
        <div className="navList">
            <ul id="listSection">
                <li><button  className="navButton" name="home">HOME</button></li>
                <li><button  className="navButton" name="about">ABOUT</button></li>
                <li><button className="navButton" name="projects">WORK</button></li>
                <li><button  className="navButton" name="hobby">HOBBY</button></li>
            </ul>
        </div>
        <div className="navMedia">
            <ul >
                <li className="navIcon" ><a href="https://github.com/NRDS92"><i className="fa-brands fa-square-github"></i></a> </li>
                <li className="navIcon" ><a href="https://www.linkedin.com/in/ndrs-perdomo/"><i className="fa-brands fa-linkedin"></i></a></li>
                <li className="navIcon" ><a href="https://www.instagram.com/danslaruephoto/"><i className="fa-brands fa-square-instagram"></i></a></li>
            </ul>
        </div>


    </div>
}




export default NaVBar;