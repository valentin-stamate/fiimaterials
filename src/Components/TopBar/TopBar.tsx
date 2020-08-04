import React from "react";
import {Button, Dropdown, Nav, Navbar} from "react-bootstrap";

const TopBar = () => {

    const openGitProject = () => {
        window.open('https://github.com/FIIMaterials', '_blank');
    }

    return (
        <React.StrictMode>

            <Navbar className="navbar-dark bg-dark" fixed="top" expand="lg">
                <Navbar.Brand>FIIMaterials</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav>
                        <Nav.Link href="#intro">Intro</Nav.Link>
                        <Nav.Link href="#materials">Materials</Nav.Link>
                        <Nav.Link href="#links">Links</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>

                    <div className="mr-auto"/>

                    <Button variant="warning" className="mr-2 inline" onClick={openGitProject}>GitHub</Button>

                    <Dropdown className="inline mr-2">
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            Mobile
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="https://play.google.com/store/apps/details?id=com.frozenbrain.fiimateriale" target="_blank">Android</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">IOS(Coming Soon)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Button variant="outline-light" className="mr-2 inline">Account</Button>

                </Navbar.Collapse>
            </Navbar>

        </React.StrictMode>
    );
}

export default TopBar;
