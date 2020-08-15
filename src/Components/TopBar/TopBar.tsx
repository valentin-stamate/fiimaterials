import React, {Component} from "react";
import {Button, Dropdown, Nav, Navbar, Spinner} from "react-bootstrap";
import {connect} from "react-redux";
import AppAPI from "../../API/AppAPI";
import store from "../../Store/store";
import {Link} from 'react-router-dom';

export class TopBar extends Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (store.getState().userIsAuth) {
            AppAPI.getInstance().getUserData();
        }
    }

    render() {
        return (
            <React.StrictMode>

                <Navbar className="navbar-dark bg-dark" fixed="top" expand="lg">
                    <Navbar.Brand>FIIMaterials<sub><span className="badge badge-pill badge-light ml-1">Beta</span></sub></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav>
                            <Nav.Link href="#intro">Intro</Nav.Link>
                            <Nav.Link href="#materials">Materials</Nav.Link>
                            <Nav.Link href="#resources">Resources</Nav.Link>
                            <Nav.Link href="#links">Links</Nav.Link>
                            <Nav.Link>
                                <Link to="/feedback" className="topbar-link">Feedback</Link>
                            </Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>

                        <div className="mr-auto"/>

                        <Button variant="dark" className="mr-2 inline" onClick={() => window.open('https://github.com/FIIMaterials', '_blank')}>GitHub</Button>

                        <Dropdown className="inline mr-2">
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Mobile
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="https://play.google.com/store/apps/details?id=com.frozenbrain.fiimateriale" target="_blank">Android</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">IOS(Coming Soon)</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Link to={this.props.userIsAuth ? '/user-account' : '/enter'}>
                            <Button variant="dark" className="mr-2 inline" disabled={this.props.userDataLoading}>
                                {
                                    this.props.userDataLoading ?
                                        <Spinner className="mr-1" as="span" animation="border" size="sm" role="status" aria-hidden="true"/> : ''
                                }

                                {
                                    this.props.userIsAuth ?
                                        this.props.user.username :
                                        'Register'
                                }
                            </Button>
                        </Link>


                    </Navbar.Collapse>
                </Navbar>

            </React.StrictMode>
        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        user: state.userData,
        userIsAuth: state.userIsAuth,
        userDataLoading: state.userDataLoading,
    }
}

export default connect(mapStateToProps)(TopBar);
