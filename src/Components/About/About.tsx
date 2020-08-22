import React, {Component} from "react";
import TopBar from "../TopBar/TopBar";
import {connect} from "react-redux";
import "./About.scss";
import {Card, Col, Container, Row} from "react-bootstrap";
import AppAPI from "../../API/AppAPI";
import Loading from "../Loading/Loading";

class About extends Component<any, any> {

    componentDidMount() {
        AppAPI.getInstance().getAbout();
    }

    render() {

        const aboutJSX: JSX.Element[] = this.props.aboutList.map((aboutObject: any, index: number) => {
            return (
                <Card key={index} className="mt-4">
                    <Card.Body>
                        <Card.Title><h2>{aboutObject.title}</h2></Card.Title>
                        <Card.Text style={{fontSize: "18px"}} className="mt-4">
                            <div dangerouslySetInnerHTML={{__html: aboutObject.body}} />
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
        });

        return (
            <React.StrictMode>

                <TopBar/>

                <div className="about-intro-container bg-0 text-white">
                    <Container>
                        <Row>
                            <Col style={{paddingTop: "10rem", paddingBottom: "10rem"}} xs={8} >
                                <h1 style={{color:"#C3C3C3"}}><b>About</b></h1>
                                <h4 style={{color:"#707070"}}>Here should be something smart and funny</h4>
                            </Col>
                            <Col xs={4}/>
                        </Row>
                    </Container>
                </div>

                <Container>
                    {
                        this.props.loading ?
                            <Loading/> : <Row>{aboutJSX}</Row>
                    }
                </Container>

                <div className="mt-4"/>

            </React.StrictMode>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        aboutList: state.aboutReducer.payload,
        loading: state.aboutReducer.isLoading,
    };
}

export default connect(mapStateToProps)(About);
