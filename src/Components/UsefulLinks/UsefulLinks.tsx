import React from "react";
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import "./UsefulLinks.css";
import EarthLink from "./../../Assets/earth-link.svg";

const UsefulLinks = () => {
    return (
        <React.StrictMode>
            <Container style={{padding:"3rem"}}>

                <img src={EarthLink} className="icon"/>

                <h3 className="title-color text-center"><b>Useful Links</b></h3>
                <h4 className="content-color text-center">Here You Came When You Feel Lost</h4>

                <Row className="mt-4">
                    <Col md={12} lg={6}>
                        <h5 className="title-color text-center"><b>College Admission</b></h5>

                        <ListGroup>
                            <ListGroup.Item>
                                <div className="left-side inline">Computer Science Admission</div>
                                <Button variant="outline-dark" className="right-side inline">LINK</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={12} lg={6}>
                        <h5 className="title-color text-center"><b>College Links</b></h5>

                        <ListGroup>
                            <ListGroup.Item>
                                <div className="left-side inline">Home</div>
                                <Button variant="outline-dark" className="right-side inline">LINK</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

            </Container>
        </React.StrictMode>
    );
};

export default UsefulLinks;
