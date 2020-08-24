import React from "react";
import './Footer.scss';

const Footer = () => {

    const openGitPage = () => {
        window.open("https://github.com/StamateValentin", "_blank")
    }

    return (
        <React.StrictMode>

            <footer className="footer bg-0">
                <div className="footer-body">
                    <div>FIIMaterials © 2020</div>
                    <div>Created by <div className="text-highlight" onClick={openGitPage}><b>Valentin Stamate</b></div> during the boring summer holiday of 2020.</div>
                </div>
            </footer>

        </React.StrictMode>
    );
}

export default Footer;
