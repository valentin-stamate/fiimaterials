import React from "react";
import {Button, Dropdown, Nav, Navbar} from "react-bootstrap";

const TopBar = () => {
    return (
        <React.StrictMode>

            <Navbar className="navbar-dark bg-dark" fixed="top" expand="lg">
                <Navbar.Brand>FIIMaterials</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Intro</Nav.Link>
                        <Nav.Link href="#link"></Nav.Link>
                    </Nav>

                    <Button variant="warning" className="mr-2">GitHub</Button>

                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            Mobile
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Android</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">IOS</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </Navbar.Collapse>
            </Navbar>

        </React.StrictMode>
    );
}

export default TopBar;
