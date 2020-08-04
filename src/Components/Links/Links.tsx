import React from "react";
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import "./Links.css";
import EarthLink from "./../../Assets/earth-link.svg";
import { connect } from 'react-redux';
import axios from 'axios';
import {BACKEND_URL, GET_LINKS_URL} from "../../Store/globals";
import {GET_LINKS} from "../../Store/actions";

const mapStateToProps = (state: any) => {
    return {
        links: state.links,
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
            <Container style={{padding:"3rem"}}>

                <img src={EarthLink} className="icon"/>

                <h3 className="title-color text-center"><b>Useful Links</b></h3>
                <h4 className="content-color text-center">Here You Came When You Feel Lost</h4>

                <Row className="mt-4">
                    <Col md={12} lg={6}>
                        <h5 className="title-color text-center"><b>College Admission</b></h5>

                        <ListGroup>
                            { linksJSX }
                        </ListGroup>

                    </Col>
                    <Col md={12} lg={6}>
                        <h5 className="title-color text-center"><b>College Links</b></h5>

                        {/*<ListGroup>*/}
                        {/*    {linksJSX}*/}
                        {/*</ListGroup>*/}

                    </Col>
                </Row>

            </Container>
        </React.StrictMode>
    );
};

export default connect(mapStateToProps)(Links);
