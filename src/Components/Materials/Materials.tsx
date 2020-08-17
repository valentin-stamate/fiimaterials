import React, {Component} from "react";
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import ListItem from "./ListItem/ListItem";
import {connect} from 'react-redux';
import {getCookie, LAST_YEAR_COOKIE} from '../../Global/cookie';
import "./Materials.scss";
import Loading from "../Loading/Loading";
import AppAPI from "../../API/AppAPI";

class Materials extends Component<any, any> {

    componentDidMount() {
        this.fetchClasses(AppAPI.getInstance().lastYear);
    }

    fetchClasses(year: number) {
        AppAPI.getInstance().getClasses(year);
    }

    render() {

        let classesFirstSemesterJSX: JSX.Element[] = [];
        let classesSecondSemesterJSX: JSX.Element[] = [];

        this.props.classes.map( (cls: any, index: Number) => {
            const clsJSX = (<ListItem userIsAuth={AppAPI.getInstance().userAuth} userRating={cls.user_rating} classRating={cls.average_rating} classID={cls.id} classYear={cls.year} title={cls.name} site_link={cls.site_link} material_link={cls.material_link} key={index} />);

            cls.semester === 1 ? classesFirstSemesterJSX.push(clsJSX) : classesSecondSemesterJSX.push(clsJSX)
            return 0;
        })

        return (
            <React.StrictMode>
                <div id="materials" className="container-full bg-0">

                    <h2 className="text-white text-center mb-0">Materials</h2>
                    <h6 className="text-white text-center">So many that you can't get enough of them</h6>

                    <ButtonGroup className="mt-3 year-selector">
                        <Button onClick={() => this.fetchClasses(1)} variant={getCookie(LAST_YEAR_COOKIE) === '1' ? 'info' : 'outline-info'}>First Year</Button>
                        <Button onClick={() => this.fetchClasses(2)} variant={getCookie(LAST_YEAR_COOKIE) === '2' ? 'warning' : 'outline-warning'}>Second Year</Button>
                        <Button onClick={() => this.fetchClasses(3)} variant={getCookie(LAST_YEAR_COOKIE) === '3' ? 'success' : 'outline-success'}>Third Year</Button>
                    </ButtonGroup>


                    <Row className="container-max-width center">
                        <Col lg={12} xl={6} className="mt-4">
                            {this.props.materialsLoading ?
                                <Loading color="light"/>
                                :
                                classesFirstSemesterJSX
                            }
                        </Col>
                        <Col lg={12} xl={6} className="mt-4">
                            {this.props.materialsLoading ?
                                <Loading color="light"/>
                                :
                                classesSecondSemesterJSX}
                        </Col>
                    </Row>

                </div>
            </React.StrictMode>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        classes: state.classesReducer.payload,
        materialsLoading: state.classesReducer.isLoading,
    };
}

export default connect(mapStateToProps)(Materials);
