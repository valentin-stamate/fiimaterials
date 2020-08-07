import React from "react";
import {connect} from "react-redux";
import ResourceListItem from "./ResourceListItem/ResourceListItem";
import {Col, Row} from "react-bootstrap";
import Loading from "../Loading/Loading";
import {GET_RESOURCES, SET_RESOURCE_LOADING} from "../../Store/actions";
import axios from 'axios';
import {BACKEND_URL, GET_RESOURCES_URL} from "../../Store/globals";

const mapStateToProps = (state: any) => {
    return {
        resources: state.resources,
        resourcesLoading: state.resourcesLoading,
    };
}

let resourcesFetchAttempt = false;

const Resources = (props: any) => {

    const fetchResources = () => {

        props.dispatch({
            type: SET_RESOURCE_LOADING,
            data: true,
        });

        axios({
            method: 'get',
            url: BACKEND_URL + GET_RESOURCES_URL,
        }).then( res => {

            props.dispatch({
                type: GET_RESOURCES,
                data: res,
            })

        } ).catch( e => {
        //    TODO fetching error
        });

    }

    if (!resourcesFetchAttempt) {
        resourcesFetchAttempt = true;
        fetchResources();
    }


    let resourceFirstCol: JSX.Element[] = [];
    let resourceSecondCol: JSX.Element[] = [];

    props.resources.map( (res: any, index: number) => {
        const item = <ResourceListItem key={index} title={res.title} imageURL={res.image_url} linkURL={res.link_url} description={res.description} tagList={res.tag_list} />
        if (index < props.resources.length - 1) {
            resourceFirstCol.push(item);
        } else {
            resourceSecondCol.push(item);
        }

        return 0;
    } )

    return (
        <React.StrictMode>
            <div id="materials" className="container-full-dark">

                <h2 className="text-white text-center mb-0">Resources</h2>
                <h6 className="text-white text-center">Just like a girlfriend is for programmers, priceless and hard to find</h6>

                <Row className="container-max-width ml-auto mr-auto">
                    <Col lg={12} xl={6} className="mt-4">

                        {props.resourcesLoading ?
                            <Loading color="light" />
                            :
                            resourceFirstCol
                        }

                    </Col>
                    <Col lg={12} xl={6} className="mt-4">

                        {props.resourcesLoading ?
                            <Loading color="light" />
                            :
                            resourceSecondCol
                        }

                    </Col>
                </Row>

            </div>
        </React.StrictMode>
    );
}

export default connect(mapStateToProps)(Resources);
