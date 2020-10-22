import React, {Component} from "react";
import {Alert, Button, ButtonGroup, Col, Row} from "react-bootstrap";
import ListItem from "./ListItem/ListItem";
import {connect} from 'react-redux';
import {getCookie, LAST_YEAR_COOKIE} from '../../Global/cookie';
import "./Materials.scss";
import Loading from "../Loading/Loading";
import AppAPI from "../../API/AppAPI";
import {Link} from "react-router-dom";

class Materials extends Component<any, any> {

    componentDidMount() {
        this.fetchClasses(this.props.lastYearSelected);
    }

    fetchClasses(year: number) {
        AppAPI.getInstance().getClasses(year);
    }

    goto(path: string) {
        this.props.history.push(path);
    }

    render() {

        let classesFirstSemesterJSX: JSX.Element[] = [];
        let classesSecondSemesterJSX: JSX.Element[] = [];

        this.props.classes.map( (cls: any, index: Number) => {
            const clsJSX = (<ListItem userIsAuth={this.props.userIsAuth} credits={cls.credits} userRating={cls.user_rating} classRating={cls.average_rating} classID={cls.id} classYear={cls.year} title={cls.name} site_link={cls.site_link} material_link={cls.material_link} key={index} />);

            cls.semester === 1 ? classesFirstSemesterJSX.push(clsJSX) : classesSecondSemesterJSX.push(clsJSX)
            return 0;
        })

        return (
            <React.StrictMode>
                <div id="materials" className="container-full bg-0 component-margin component-padding component-top-radius">

                    <h2 className="text-white text-center mb-0">Materials</h2>
                    <h6 className="text-white text-center"><>The heart and the soul of this website.</></h6>

                    <ButtonGroup className="mt-3 year-selector">
                        <Button onClick={() => this.fetchClasses(1)} variant={getCookie(LAST_YEAR_COOKIE) === '1' ? 'info' : 'outline-light'}>First Year</Button>
                        <Button onClick={() => this.fetchClasses(2)} variant={getCookie(LAST_YEAR_COOKIE) === '2' ? 'warning' : 'outline-light'}>Second Year</Button>
                        <Button onClick={() => this.fetchClasses(3)} variant={getCookie(LAST_YEAR_COOKIE) === '3' ? 'success' : 'outline-light'}>Third Year</Button>
                        <Link to="/more-materials"><Button variant="outline-light">More...</Button></Link>
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
        userIsAuth: state.appReducer.userIsAuth,
        lastYearSelected: state.appReducer.lastYearSelected,
    };
}

export default connect(mapStateToProps)(Materials);
