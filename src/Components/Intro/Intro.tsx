import React from "react";
import "./Intro.css";
import {Col, Container, Row} from "react-bootstrap";

const subtitles: string[] = [
    "The place where you came for your favorite materials. Ahem.",
    "Ah sh*t, here we go again.",
    "Let's do this, shall we.",
    "It's only one month.",
    "You can do it, I believe in you.",
];

// This is not copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

const Intro = () => {
    return (
        <React.StrictMode>

            <div id="intro" className="intro-container text-dark">

                <Container className="text-container text-sm-center text-md-left">
                    <Row>
                        <Col >
                            <h1 style={{color:"#C3C3C3"}}><b>FII Materials The Web Version</b></h1>
                            <h4 style={{color:"#707070"}}>{subtitles[getRandomInt(subtitles.length)]}</h4>
                        </Col>

                    </Row>
                </Container>

            </div>

        </React.StrictMode>
    );
}

export default Intro;
