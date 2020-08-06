import React, {useState} from "react";
import {ButtonGroup, Button, Row, Col, Toast} from "react-bootstrap";
import ListItem from "./ListItem/ListItem";
import { connect } from 'react-redux';
import {GET_CLASSES, SET_MATERIALS_LOADING} from "../../Store/actions";
import axios from 'axios'
import { BACKEND_URL, GET_CLASSES_URL } from "../../Store/globals";
import {getCookie, LAST_YEAR_COOKIE, setCookie} from '../../Store/cookie';
import "./Materials.css";
import Loading from "../Loading/Loading";

const mapStateToProps = (state: any) => {
    return {
        classes: state.classes,
        materialsLoading: state.materialsLoading,
    };
}

// TODO a "SQUISHY, get the mobile app" alert for small screens

let dataFetched = false;

const Materials = (props: any) => {

    const fetchClasses = (e: any) => {

        props.dispatch({
            type: SET_MATERIALS_LOADING,
            data: true,
        })

        const yearCookie = getCookie(LAST_YEAR_COOKIE);

        let year = yearCookie !== null ? yearCookie : '1';

        if (e !== null) {
            year = e.target.getAttribute('button-key');
        }
        setCookie(LAST_YEAR_COOKIE, year);

        axios({
            method: "post",
            url: BACKEND_URL + GET_CLASSES_URL,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                'year': year,
            }
        }).then( res => {

            props.dispatch({
                type: GET_CLASSES,
                data: res.data,
            })

            props.dispatch({
                type: SET_MATERIALS_LOADING,
                data: false,
            })

        } ).catch(
        // TODO show an error
        )
    }

    if (!dataFetched) {
        dataFetched = true;
        fetchClasses(null);
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

    const currentYear = getCookie(LAST_YEAR_COOKIE);

    return (
        <React.StrictMode>
            <div id="materials" className="mt-component container-full-dark ">

                <ButtonGroup aria-label="Basic example" className="year-selector">
                    <Button button-key="1" onClick={fetchClasses} variant={currentYear === '1' ? 'info' : 'outline-info'}>First Year</Button>
                    <Button button-key="2" onClick={fetchClasses} variant={currentYear === '2' ? 'warning' : 'outline-warning'}>Second Year</Button>
                    <Button button-key="3" onClick={fetchClasses} variant={currentYear === '3' ? 'success' : 'outline-success'}>Third Year</Button>
                </ButtonGroup>

                <Row className="mt-4">
                    <Col lg={12} xl={6}>
                        {props.materialsLoading ?
                            <Loading color="light" />
                            :
                            classesFirstSemesterJSX
                        }
                    </Col>
                    <Col lg={12} xl={6} className="mt-xs-2 mt-sm-2 mt-md-2 mt-lg-2 mt-xl-0">
                        {props.materialsLoading ?
                            <Loading color="light" />
                            :
                            classesSecondSemesterJSX}
                    </Col>
                </Row>

            </div>
        </React.StrictMode>
    );
}

export default connect(mapStateToProps)(Materials);
