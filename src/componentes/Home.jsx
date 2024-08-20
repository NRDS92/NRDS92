import React from "react";
import Parallax from 'parallax-js'


function Home(){
    let scene = document.getElementById('scene');
    //let parallaxInstance = new Parallax(scene);

    return <div className="home">
    <section className="banner">
    <div className="container">
        <div className="hometext">
            <h2>Welcome to my Web Site</h2>
            <p>here you will find some of my work, my expererience and all technologies i have been working with.</p>
            <p>there are some tools created by myself, </p>
        </div>
        <div id="scene">
            <div className="layer z" data-depth-y="5"><i className="fa-solid fa-guitar"></i></div>
            <div className="layer" data-depth="6"><i className="fa-solid fa-camera-retro"></i></div>
            <div className="layer z" data-depth="3"><i className="fa-solid fa-radio"></i></div>
            <div className="layer " data-depth="0.4"><i className="fa-solid fa-music"></i></div>
            <div className="layer z" data-depth="1"><i className="fa-brands fa-github"></i></div>
            <div className="layer " data-depth="2"><i className="fa-brands fa-html5"></i></div>
            <div className="layer z" data-depth="0"><i className="fa-solid fa-code"></i></div>
            <div className="layer " data-depth="-1"><i className="fa-brands fa-js"></i></div>
            <div className="layer z" data-depth="-2"><i className="fa-brands fa-node-js"></i></div>
            <div className="layer " data-depth="-3"><i className="fa-brands fa-react"></i></div>
            <div className="layer z" data-depth="-4"><i className="fa-brands fa-discord"></i></div>
            <div className="layer " data-depth="-5"><i className="fa-solid fa-book"></i></div>
            <div className="layer z" data-depth="-6"><i className="fa-solid fa-user-secret"></i></div>
        </div>
    </div>
    </section>
</div>
}

export default Home;