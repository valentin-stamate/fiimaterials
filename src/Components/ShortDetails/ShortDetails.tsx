import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./ShortDetails.scss";
import AboutSvg from "./../../Assets/about-icon.svg";
import PackageSVG from "./../../Assets/package-icon.svg";
import GitHubIcon from "./../../Assets/github-icon.svg";

const ShortDetails = () => {
    return (
        <React.StrictMode>

            <Container style={{paddingTop: "3rem", paddingBottom: "4rem"}}>
                <Row className="text-center">
                    <Col sm={12} md={4}>
                        <img alt="icon" src={AboutSvg} className="info-icon"/>
                        <b><h5 className="title-color">About The Project</h5></b>
                        <b><div className="content-color">
                            This is the new version of FII Materials project. The frontend is made with React and Bootstrap for UI. For backend I picked Django as a REST Framework.
                            So, this is a FullStack app. <code>If you like this project you can give it a star, the GitHub link is in the TopBar.</code>
                        </div></b>
                    </Col>
                    <Col sm={12} md={4}>
                        <img alt="icon" src={PackageSVG} className="info-icon"/>
                        <b><h5 className="title-color">All Materials (almost) In One Package</h5></b>
                        <b><div className="content-color">
                            The first year is complete. The purpose is to have all materials here on this site. I try to make the process as easy as possible:
                            one package, Mega for storing the files and a mobile app. <code>Thanks for all who are helping me with these materials.</code>
                        </div></b>
                    </Col>
                    <Col sm={12} md={4}>
                        <img alt="icon" src={GitHubIcon} className="info-icon"/>
                        <b><h5 className="title-color">It's Open Source</h5></b>
                        <b><div className="content-color">
                            I've decided to make the project public, so if you are curios how this project works you can check the GitHub repositories, I make one for every part of it: frontend, backend, mobile. <code>Right now the project it's not open for contributions.</code>
                        </div></b>
                    </Col>
                </Row>
            </Container>

        </React.StrictMode>
    );
}

export default ShortDetails;
