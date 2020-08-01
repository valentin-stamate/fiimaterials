import React from "react";
import { Container, Tabs, Tab, ButtonGroup, Button, Row, Col, ListGroup, Card} from "react-bootstrap";
import ListItem from "./ListItem/ListItem";
import { connect } from 'react-redux';
import { GET_CLASSES } from "../../Store/actions";
import axios from 'axios'
import { BACKEND_URL, GET_CLASSES_URL } from "../../Store/globals";

const mapStateToProps = (state: any) => {
    return {
        classes: state.classes,
    };
}

// TODO a "SQUISHY, get the mobile app" alert for small screens

let dataFetched = false;

const Materials = (props: any) => {

    const fetchClasses = () => {
        axios({
            method: "get",
            url: BACKEND_URL + GET_CLASSES_URL,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then( res => {
            props.dispatch({
                type: GET_CLASSES,
                data: res.data,
            })
        //    TODO react UI
        } ).catch(
        //
        )
    }

    if (!dataFetched) {
        dataFetched = true;
        fetchClasses();
    }

    let classesFirstSemesterJSX: JSX.Element[] = [];
    let classesSecondSemesterJSX: JSX.Element[] =  [];

    props.classes.map( (cls: any, index: Number) => {
        const clsJSX = (<ListItem key={index} title={cls.name} site_link={cls.site_link} material_link={cls.material_link} />);

        if (cls.semester === 1) {
            classesFirstSemesterJSX.push(clsJSX);
        } else if (cls.semester === 2) {
            classesSecondSemesterJSX.push(clsJSX)
        }
    })


    return (
        <React.StrictMode>
            <div className="mt-component container-full-dark ">

                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-info">First Year</Button>
                    <Button variant="outline-warning">Second Year</Button>
                    <Button variant="outline-success">Third Year</Button>
                </ButtonGroup>

                <Row>
                    <Col lg={12} xl={6}>
                        {classesFirstSemesterJSX}
                    </Col>
                    <Col lg={12} xl={6} className="mt-xs-2 mt-sm-2 mt-md-2 mt-lg-2 mt-xl-0">
                        {classesSecondSemesterJSX}
                    </Col>
                </Row>

            </div>
        </React.StrictMode>
    );
}

export default connect(mapStateToProps)(Materials);
