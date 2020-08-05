import React from "react";
import {Button, Dropdown, Nav, Navbar} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import {connect} from "react-redux";
import axios from 'axios';
import {BACKEND_URL, GET_USER_URL} from "../../Store/globals";
import {getCookie, USER_AUTH_TOKEN_COOKIE} from "../../Store/cookie";
import {GET_USER_DATA, SET_AUTH_STATUS} from "../../Store/actions";

const mapStateToProps = (state: any) => {
    return {
        user: state.userData,
        userIsAuth: state.userIsAuth,
    }
}

let userFetched = false;
const TopBar = (props: any) => {

    const token = getCookie(USER_AUTH_TOKEN_COOKIE);
    if (token !== undefined) {

        props.dispatch({
            type: SET_AUTH_STATUS,
            data: true,
        })
    }

    if (!userFetched && props.userIsAuth) {

        userFetched = true;

        const userToken = getCookie(USER_AUTH_TOKEN_COOKIE);

        axios({
            method: 'post',
            url: BACKEND_URL + GET_USER_URL,
            headers: {
                'Authorization': 'Token ' + userToken,
            },
        }).then( res => {

            props.dispatch({
                type: GET_USER_DATA,
                data: res.data,
            })

        } ).catch( e => {

        } );
    }



    const UseHistory = useHistory();

    const openGitProject = () => {
        window.open('https://github.com/FIIMaterials', '_blank');
    }

    const userButton = () => {
        if (props.userIsAuth) {
            UseHistory.push('/user-account')
        } else {
            UseHistory.push('/enter');
        }
    }

    return (
        <React.StrictMode>

            <Navbar className="navbar-dark bg-dark" fixed="top" expand="lg">
                <Navbar.Brand>FIIMaterials<sub><span className="badge badge-pill badge-light ml-1">Beta</span></sub></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav>
                        <Nav.Link href="#intro">Intro</Nav.Link>
                        <Nav.Link href="#materials">Materials</Nav.Link>
                        <Nav.Link href="#links">Links</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>

                    <div className="mr-auto"/>

                    <Button variant="dark" className="mr-2 inline" onClick={openGitProject}>GitHub</Button>

                    <Dropdown className="inline mr-2">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Mobile
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="https://play.google.com/store/apps/details?id=com.frozenbrain.fiimateriale" target="_blank">Android</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">IOS(Coming Soon)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Button variant="dark" className="mr-2 inline" onClick={userButton}>
                        {
                            props.userIsAuth ?
                                props.user.username :
                                'Register'
                        }
                    </Button>

                </Navbar.Collapse>
            </Navbar>

        </React.StrictMode>
    );
}

export default connect(mapStateToProps)(TopBar);
