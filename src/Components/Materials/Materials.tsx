import React from "react";
import {ButtonGroup, Button, Row, Col} from "react-bootstrap";
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
        const clsJSX = (<ListItem key={index} classRating={cls.average_rating} classID={cls.id} classYear={cls.year} title={cls.name} site_link={cls.site_link} material_link={cls.material_link} />);

        if (cls.semester === 1) {
            classesFirstSemesterJSX.push(clsJSX);
        } else if (cls.semester === 2) {
            classesSecondSemesterJSX.push(clsJSX)
        }

        return 0;
    })

    const currentYear = getCookie(LAST_YEAR_COOKIE);

    return (
        <React.StrictMode>
            <div id="materials" className="container-full bg-0">

                <h2 className="text-white text-center mb-0">Materials</h2>
                <h6 className="text-white text-center">So many that you can't get enough of them</h6>

                <ButtonGroup aria-label="Basic example" className="mt-3 year-selector">
                    <Button button-key="1" onClick={fetchClasses} variant={currentYear === '1' ? 'info' : 'outline-info'}>First Year</Button>
                    <Button button-key="2" onClick={fetchClasses} variant={currentYear === '2' ? 'warning' : 'outline-warning'}>Second Year</Button>
                    <Button button-key="3" onClick={fetchClasses} variant={currentYear === '3' ? 'success' : 'outline-success'}>Third Year</Button>
                </ButtonGroup>


                <Row className="container-max-width center">
                    <Col lg={12} xl={6} className="mt-4">
                        {props.materialsLoading ?
                            <Loading color="light" />
                            :
                            classesFirstSemesterJSX
                        }
                    </Col>
                    <Col lg={12} xl={6} className="mt-4">
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
