import React from "react";
import TopBar from "../TopBar/TopBar";
import Intro from "../Intro/Intro";
import ShortDetails from "../ShortDetails/ShortDetails";
import Materials from "../Materials/Materials";
import Links from "../Links/Links";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const MainPage = () => {
    return (
        <React.StrictMode>
            <TopBar/>
            <Intro/>
            <ShortDetails/>
            <Materials/>
            <Links/>

            <hr/>
            <Contact/>

            <Footer/>
        </React.StrictMode>
    );
}

export default MainPage;
