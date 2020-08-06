import React from "react";
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import "./Links.css";
import EarthLink from "./../../Assets/earth-link.svg";
import { connect } from 'react-redux';
import axios from 'axios';
import {BACKEND_URL, GET_LINKS_URL} from "../../Store/globals";
import {GET_LINKS, SET_LINKS_LOADING} from "../../Store/actions";
import Loading from "../Loading/Loading";

const mapStateToProps = (state: any) => {
    return {
        links: state.links,
        linksLoading: state.linksLoading,
    };
}

let dataFetched = false;

const Links = (props: any) => {

    function getLinks() {
        axios({
            method: "get",
            url: BACKEND_URL + GET_LINKS_URL,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then( result => {
            props.dispatch({
                type: GET_LINKS,
                data: result.data,
            })

            props.dispatch({
                type: SET_LINKS_LOADING,
                data: false,
            })

        } ).catch( e => {
        //
        });
    }

    if (!dataFetched) {
        dataFetched = true;

        getLinks();
    }

    const linksJSX = props.links.map( (link: any, index: number) => {
        return (
            <ListGroup.Item key={index}>
                <div className="left-side inline">{link.name}</div>
                <Button variant="outline-dark" href={link.link} target="_blank" className="right-side inline">LINK</Button>
            </ListGroup.Item>
        );
    } );

    return (
        <React.StrictMode>
            <div id="links"/>
            <Container className="container-full">

                {/*<img src={EarthLink} className="icon"/>*/}

                <h2 className="title-color text-center mb-0"><b>Useful Links</b></h2>
                <h6 className="content-color text-center">Feeling lost? Here are some links you can use</h6>

                <Row className="mt-4">
                    <Col md={12} lg={6}>
                        <h5 className="title-color text-center"><b>College Admission</b></h5>

                        <ListGroup>
                            {props.linksLoading ?
                                <Loading color="dark" />
                                :
                                linksJSX
                            }
                        </ListGroup>

                    </Col>
                    <Col md={12} lg={6}>
                        <h5 className="title-color text-center"><b>College Links</b></h5>

                        <ListGroup>
                            {props.linksLoading ?
                                <Loading color="dark" />
                                :
                                linksJSX
                            }
                        </ListGroup>

                    </Col>
                </Row>

            </Container>
        </React.StrictMode>
    );
};

export default connect(mapStateToProps)(Links);
