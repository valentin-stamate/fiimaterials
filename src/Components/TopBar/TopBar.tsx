import React, {Component} from "react";
import {Button, Dropdown, Nav, Navbar, Spinner} from "react-bootstrap";
import {connect} from "react-redux";
import AppAPI from "../../API/AppAPI";
import {Link, withRouter} from 'react-router-dom';

export class TopBar extends Component<any, any>{

    componentDidMount() {

    }

    render() {
        return (
            <React.StrictMode>

                <Navbar className="navbar-dark bg-dark" fixed="top" expand="lg">
                    <Navbar.Brand>FIIMaterials<sub><span className="badge badge-pill badge-light ml-1">Beta</span></sub></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {
                            window.location.pathname === '/' ?
                                <Nav>
                                    <Nav.Link href="#intro">Intro</Nav.Link>
                                    <Nav.Link href="#materials">Materials</Nav.Link>
                                    <Nav.Link href="#resources">Resources</Nav.Link>
                                    <Nav.Link href="#links">Links</Nav.Link>
                                    <Nav.Link onClick={() => this.props.history.push('/feedback')}>Feedback</Nav.Link>
                                    <Nav.Link href="#contact">Contact</Nav.Link>
                                </Nav>
                                :
                                <Nav>
                                    <Nav.Link onClick={() => this.props.history.push('/')}>Home</Nav.Link>
                                    <Nav.Link onClick={() => this.props.history.push('/feedback')}>Feedback</Nav.Link>
                                </Nav>
                        }

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
                                    this.props.loading ?
                                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/> : ''
                                }
                                {
                                    this.props.userIsAuth ? this.props.user.username : 'Register'
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
        user: state.userDataReducer.payload,
        loading: state.userDataReducer.isLoading,
        userIsAuth: state.appReducer.userIsAuth,
    }
}

export default withRouter(connect(mapStateToProps)(TopBar));
