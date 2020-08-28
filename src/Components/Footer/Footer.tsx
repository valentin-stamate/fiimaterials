import React from "react";
import './Footer.scss';
import TopBar from "../TopBar/TopBar";

const Footer = () => {

    const openGitPage = () => {
        window.open("https://github.com/StamateValentin", "_blank")
    }

    return (
        <React.StrictMode>

            <footer className="footer bg-0">
                <div className="footer-body">
                    <div>FIIMaterials © 2020 | <b><a href="/privacy" className="text-highlight" style={{textDecoration: "none"}}>Privacy Policy</a></b></div>
                    <div>Created by <div className="text-highlight" onClick={openGitPage}><b>Valentin Stamate</b></div> during the boring summer holiday of 2020.</div>
                </div>
            </footer>

        </React.StrictMode>
    );
}

export default Footer;
