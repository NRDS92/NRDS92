import React from "react";

function Footer(){

    const year = new Date().getFullYear();

    return <div className="footer">
        <p>
        <i class="fa-regular fa-copyright"></i>
        <span> {year} </span>
        Copyright
        </p>
    </div>
}

export default Footer;