import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./ShortDetails.css";
import AboutSvg from "./../../Assets/about-icon.svg";
import PackageSVG from "./../../Assets/package-icon.svg";
import GitHubIcon from "./../../Assets/github-icon.svg";

const ShortDetails = () => {
    return (
        <React.StrictMode>

            <Container className="mt-component">
                <Row className="text-center">
                    <Col>
                        <img src={AboutSvg} className="info-icon"/>
                        <b><h5 className="title-color">About The Project</h5></b>
                        <b><div className="content-color">
                            Because I need to have 3 rows of information, I'll make a short description about the technologies used.
                            The frontend is made with <kbd>React</kbd>, the backend with <kbd>Django REST API</kbd> and the struggle happens in the summer of 2020.
                        </div></b>
                    </Col>
                    <Col>
                        <img src={PackageSVG} className="info-icon"/>
                        <b><h5 className="title-color">All Materials (almost) In One Package</h5></b>
                        <b><div className="content-color">
                            The first year is complete. The purpose is to have all materials here on this site. I try to make the process as easy as possible:
                            one package, Mega for storing the files and a mobile app. <code>Thanks for all who are helping me with these materials.</code>
                        </div></b>
                    </Col>
                    <Col>
                        <img src={GitHubIcon} className="info-icon"/>
                        <b><h5 className="title-color">It's Open Source</h5></b>
                        <b><div className="content-color">
                            I know, it's not a very complex site because it have one purpose. But it covers the basics of those technologies.
                            So, if you wanna see how the magic is done you have a link to this project in the topbar.
                        </div></b>
                    </Col>
                </Row>
            </Container>

        </React.StrictMode>
    );
}

export default ShortDetails;
