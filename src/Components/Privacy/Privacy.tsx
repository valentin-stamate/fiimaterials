import React from "react";
import TopBar from "../TopBar/TopBar";
import {Card, Col, Container, Row} from "react-bootstrap";
import IntroFlatCover from "../../Assets/intro-flat-cover.svg";

const Privacy = () => {
    return (
        <React.StrictMode>

            <TopBar />

            <div id="intro" className="intro-container bg-0 text-dark">

                <Container className="text-container text-sm-center text-md-left">
                    <Row>
                        <Col>
                            <h1 style={{color:"#C3C3C3"}}><b>Privacy & Policy</b></h1>
                            <h4 style={{color:"#707070"}}>Like the agreement section. No one reads it.</h4>
                        </Col>
                    </Row>
                </Container>

            </div>

            <Container className="mt-5 mb-5">
                <Card>
                    <Card.Body>
                        <p>So... I will not sell any data. The user data is kept into a database which I can access easily. I can see all the users with their data, except the password because is encrypted, cuz I'm not stupid to store it as plain text.
                        Even tho I can see the data mentioned earlier, I will not reveal it to anybody. The only things revealed are 'statistics' such as rating and number of users. So not user specific data.</p>

                        <p>Do I get any money from this project? No. I thought about that because this project was not easy to make, especially the new version. But this project wouldn't be possible without those materials, which are not mine and wouldn't be fair for those who made their own materials version that completes mine.
                            And I also learned new things doing it, so it's a win-win. </p>
                        <p>If you got here, thanks for your patience and hope you like the project.</p>
                    </Card.Body>
                </Card>
            </Container>

        </React.StrictMode>
    );
}

export default Privacy;