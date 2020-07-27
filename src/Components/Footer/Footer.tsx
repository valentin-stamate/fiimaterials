import React from "react";
import './Footer.css';

const Footer = () => {

    const openGitPage = () => {
        window.open("https://github.com/StamateValentin", "_blank")
    }

    return (
        <React.StrictMode>

            <footer className="footer">
                <div className="footer-body">
                    <div>© 2020 Copyright: FIIMaterials.</div>
                    <div>Created by <div className="text-highlight" onClick={openGitPage}><b>Valentin Stamate</b></div> during the boring summer holiday.</div>
                </div>
            </footer>

        </React.StrictMode>
    );
}

export default Footer;
