import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import "./ShortDetails.scss";
import AboutSvg from "./../../Assets/about-icon.svg";
import PackageSVG from "./../../Assets/package-icon.svg";
import GitHubIcon from "./../../Assets/github-icon.svg";

const shortDetails = [
    {
        title: 'About The Project',
        body: <>This is the new version of FIIMaterials Project. You can easily find recent materials because the project started in 2020. You can also find useful resources and links. There is a rating system for classes and you can make an idea about them.</>,
        icon: AboutSvg,
    },
    {
        title: 'All In One',
        body: <>The first year is complete. The purpose is to have all materials here on this site. I try to make the process as easy as possible:
            one package, Mega for storing the files and a mobile app. <code>Thanks for all who are helping me with these materials.</code></>,
        icon: PackageSVG,
    },
    {
        title: 'It\'s Open Source',
        body: <>I've decided to make the project public, so if you are curios how this project works you can check the GitHub repositories, I make one for every part of it: frontend, backend, mobile. <code>Right now the project it's not open for contributions.</code></>,
        icon: GitHubIcon,
    },
];

const ShortDetails = () => {

    const shortDetailsJSX: JSX.Element[] = shortDetails.map( (e, i) => {
        return (
            <Col sm={12} lg={4} key={i}>
                <Card className="short-details-card component-margin">
                    <img src={e.icon} alt="icon" className="info-icon ml-4"/>
                    <Card.Body>
                        <Card.Title><h5 className="high-emphasis-light">{e.title}</h5></Card.Title>
                        <Card.Text className="helper-text-light">{e.body}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    } );

    return (
        <React.StrictMode>

            <Container fluid className="component-padding-horizontal">
                <Row>
                    {shortDetailsJSX}
                </Row>
            </Container>

        </React.StrictMode>
    );
}

export default ShortDetails;
