import React, {Component} from "react";
import {Button, Dropdown, Nav, Navbar, Spinner, OverlayTrigger, Tooltip} from "react-bootstrap";
import {connect} from "react-redux";
import AppAPI from "../../API/AppAPI";
import {Link, withRouter} from 'react-router-dom';
import store from "../../Redux/store";

export class TopBar extends Component<any, any>{

    componentDidMount() {
        if (store.getState().appReducer.userIsAuth) {
            AppAPI.getInstance().getUserData();
        }
    }

    goto (path: string) {
        this.props.history.push(path);
    }

    render() {
        return (
            <React.StrictMode>

                <Navbar className="navbar-dark bg-dark" fixed="top" expand="lg">
                    <Navbar.Brand>FIIMaterials
                        {/*<sub><span className="badge badge-pill badge-light ml-1">New</span></sub>*/}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {
                            window.location.pathname === '/' ?
                                <Nav>
                                    <Nav.Link href="#intro">Intro</Nav.Link>
                                    <Nav.Link href="#materials">Materials</Nav.Link>
                                    <Nav.Link href="#resources">Resources</Nav.Link>
                                    <Nav.Link href="#links">Links</Nav.Link>
                                    <Nav.Link href="#make_sense">Make Sense?</Nav.Link>
                                    <Nav.Link onClick={() => this.goto('/feedback')}>Feedback</Nav.Link>
                                    <Nav.Link onClick={() => this.goto('/about')}>About</Nav.Link>
                                    <Nav.Link onClick={() => this.goto('/more-materials')} className="text-info">More Materials</Nav.Link>
                                    <Nav.Link href="#contact">Contact</Nav.Link>
                                </Nav>
                                :
                                <Nav>
                                    <Nav.Link onClick={() => this.goto('/')} active={window.location.pathname === '/'}>Home</Nav.Link>
                                    <Nav.Link onClick={() => this.goto('/feedback')} active={window.location.pathname === '/feedback'}>Feedback</Nav.Link>
                                    <Nav.Link onClick={() => this.goto('/about')} active={window.location.pathname === '/about'}>About</Nav.Link>
                                    <Nav.Link onClick={() => this.goto('/more-materials')} className="text-info">More Materials</Nav.Link>
                                </Nav>
                        }
                        <div className="mr-auto"/>
                        
                        <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-top" placement="bottom"><strong>Give a star to which part you like</strong></Tooltip>}>
                            <Button variant="warning" className="mr-2 inline" onClick={() => window.open('https://github.com/FIIMaterials', '_blank')}>GitHub</Button>
                        </OverlayTrigger>

                        <Dropdown className="inline mr-2">
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Mobile
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="https://play.google.com/store/apps/details?id=com.frozenbrain.fiimateriale" target="_blank">Android(New Version Soon)</Dropdown.Item>
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
