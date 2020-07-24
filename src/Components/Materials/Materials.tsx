import React from "react";
import {Container, Tabs, Tab, ButtonGroup, Button, Row, Col, ListGroup, Card} from "react-bootstrap";
import ListItem from "../ListItem/ListItem";

const Materials = () => {
    return (
        <React.StrictMode>
            <div className="mt-component container-full-dark ">

                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-light">First Year</Button>
                    <Button variant="outline-light">Second Year</Button>
                    <Button variant="outline-light">Third Year</Button>
                </ButtonGroup>

                <Row>
                    <Col>

                        <Card>
                            <ListItem title="Matematica" action="http://google.com" />
                        </Card>

                    </Col>
                    <Col>

                        <ListGroup>
                            <ListGroup.Item variant="light">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>

                    </Col>
                </Row>

            </div>
        </React.StrictMode>
    );
}

export default Materials;
