import React from "react";
import {Container, Tabs, Tab, ButtonGroup, Button, Row, Col, ListGroup, Card} from "react-bootstrap";
import ListItem from "../ListItem/ListItem";
import RateStar from "../RateStar/RateStar";

const Materials = () => {
    return (
        <React.StrictMode>
            <div className="mt-component container-full-dark ">

                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-info">First Year</Button>
                    <Button variant="outline-warning">Second Year</Button>
                    <Button variant="outline-success">Third Year</Button>
                </ButtonGroup>

                <Row>
                    <Col lg={12} xl={6}>

                        <Card style={{backgroundColor: "#404040"}}>
                            <ListItem title="Matematica" action="http://google.com" />
                        </Card>

                    </Col>
                    <Col lg={12} xl={6} className="mt-xs-2 mt-sm-2 mt-md-2 mt-lg-2 mt-xl-0">

                        <Card style={{backgroundColor: "#404040"}}>
                            <ListItem title="Programare Orientata Obiect" action="http://google.com" />
                        </Card>

                    </Col>
                </Row>

            </div>
        </React.StrictMode>
    );
}

export default Materials;
