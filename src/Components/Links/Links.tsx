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

        props.dispatch({
            type: SET_LINKS_LOADING,
            data: true,
        })

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
        // TODO links error try again
        });
    }

    if (!dataFetched) {
        dataFetched = true;

        getLinks();
    }

    let linksFirstColJSX: JSX.Element[] = [];
    let linksSecondColJSX: JSX.Element[] = [];

    props.links.map( (link: any, index: number) => {
        const el = (
            <ListGroup.Item key={index}>
                <div className="left-side inline">{link.name}</div>
                <Button variant="outline-dark" href={link.link} target="_blank" className="right-side inline">LINK</Button>
            </ListGroup.Item>
        );

        const len: number = props.links.length / 2 as number;
        if (index <= len) {
            linksFirstColJSX.push(el);
        } else {
            linksSecondColJSX.push(el);
        }

        return 0;
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
                        {/*<h5 className="title-color text-center"><b>College Admission</b></h5>*/}

                        <ListGroup>
                            {props.linksLoading ?
                                <Loading color="dark" />
                                :
                                linksFirstColJSX
                            }
                        </ListGroup>

                    </Col>
                    <Col md={12} lg={6}>
                        {/*<h5 className="title-color text-center"><b>College Links</b></h5>*/}

                        <ListGroup>
                            {props.linksLoading ?
                                <Loading color="dark" />
                                :
                                linksSecondColJSX
                            }
                        </ListGroup>

                    </Col>
                </Row>

            </Container>
        </React.StrictMode>
    );
};

export default connect(mapStateToProps)(Links);
