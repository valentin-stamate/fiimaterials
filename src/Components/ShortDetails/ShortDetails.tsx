import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import "./ShortDetails.scss";
import AboutSvg from "./../../Assets/about-icon.svg";
import PackageSVG from "./../../Assets/package-icon.svg";
import GitHubIcon from "./../../Assets/github-icon.svg";

const shortDetails = [
    {
        title: 'About The Project',
        body: <div>This is the new version of FIIMaterials Project. You can easily find recent materials because the project started in 2020. You can also find useful resources and links. There is a rating system for classes and you can make an idea about them.</div>,
        icon: AboutSvg,
    },
    {
        title: 'All In One',
        body: <div>The first year is complete. The purpose is to have all materials here on this site. I try to make the process as easy as possible:
            one package, Mega for storing the files and a mobile app. <code>Thanks for all who are helping me with these materials.</code></div>,
        icon: PackageSVG,
    },
    {
        title: 'It\'s Open Source',
        body: <div>I've decided to make the project public, so if you are curios how this project works you can check the GitHub repositories, I make one for every part of it: frontend, backend, mobile. <code>Right now the project it's not open for contributions.</code></div>,
        icon: GitHubIcon,
    },
];

const ShortDetails = () => {

    const shortDetailsJSX: JSX.Element[] = shortDetails.map( (e, i) => {
        return (
            <Col sm={12} md={4} className="mt-4">
                <Card>
                    <img src={e.icon} className="info-icon ml-4"/>
                    <Card.Body>
                        <Card.Title><h5>{e.title}</h5></Card.Title>
                        <Card.Text>{e.body}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    } );

    return (
        <React.StrictMode>

            <Container style={{paddingTop: "2rem", paddingBottom: "3rem"}}>
                <Row>
                    {shortDetailsJSX}
                </Row>
            </Container>

        </React.StrictMode>
    );
}

export default ShortDetails;
