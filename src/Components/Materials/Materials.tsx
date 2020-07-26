import React from "react";
import {Container, Tabs, Tab, ButtonGroup, Button, Row, Col, ListGroup, Card} from "react-bootstrap";
import ListItem from "../ListItem/ListItem";

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
                    <Col>

                        <Card style={{backgroundColor: "#404040"}}>
                            <ListItem title="Matematica" action="http://google.com" />
                        </Card>

                    </Col>
                    <Col>

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
