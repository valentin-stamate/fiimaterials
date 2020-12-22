import React from "react";
import "./Intro.scss";
import {Col, Container, Row} from "react-bootstrap";
import IntroFlatCover from "../../Assets/intro-flat-cover.svg";
import IntroFlatSnow from "../../Assets/intro-cover_snow.svg";

const subtitles: string[] = [
    "The place where you came for your favorite materials.",
    "Ah sh*t, here we go again.",
    "Elon Musk invited his college crush out for ice cream, she refuses, then he sowed up to her with two melting ice creams.",
    "Let's do this, shall we.",
    "Somebody told me that the site texts are weird.",
    "Rejection is only part of the process. 'Stay calm, you'll be fine'.",
    'cout>>"Characters can be tricky";',
    "The Milky Way can be seen when the moon is not on the sky.",
];

// This is not copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random ... ahem
function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

const Intro = () => {
    return (
        <React.StrictMode>

            <div id="intro" className="intro-container bg-0 text-dark component-bottom-radius">

                <Container className="text-container text-sm-center text-md-left">
                    <Row>
                        <Col>
                            <h1 style={{color:"#C3C3C3"}}><b>FII Materials The Web Version</b></h1>
                            <h4 style={{color:"#707070"}}>{subtitles[getRandomInt(subtitles.length)]}</h4>
                        </Col>
                    </Row>
                </Container>

                <div className="display-images">
                    <img alt="" className="intro-flat-cover" src={IntroFlatCover}/>
                    <img alt="" className="intro-flat-snow" src={IntroFlatSnow}/>
                </div>

            </div>

        </React.StrictMode>
    );
}

export default Intro;
