import React, {Component} from "react";
import {connect} from "react-redux";
import TopBar from "../TopBar/TopBar";
import "./MoreMaterials.scss";
import {Badge, Button, Card, Col, Container, Row} from "react-bootstrap";
import Loading from "../Loading/Loading";
import AppAPI from "../../API/AppAPI";

class MoreMaterials extends Component<any, any> {

    componentDidMount() {
        AppAPI.getInstance().getCredits();
    }

    render() {

        const creditsJSX: JSX.Element[] = this.props.credits.map((e: any, i: any) => {

            const roles: string[] = e.role.split('_');
            const rolesJSX = roles.map((role, i) => {
                return (<Badge variant="info" key={i} className="mr-2">{role}</Badge>);
            })

            return (
                <Col md={12} lg={4} key={i} className="mt-4">
                    <Card border="light" className="more-materials-card">
                        <div className="more-materials-card-header">
                            <img className="more-materials-card-image" src={e.image_link}/>
                            <div className="more-materials-card-title">
                                <div><b>{e.name}</b></div>
                                <div>{rolesJSX}</div>
                            </div>
                        </div>
                        <Card.Body>
                            {e.about}
                        </Card.Body>
                        <hr style={{margin:"0", padding: "0"}}/>
                        <div className="more-materials-card-action">
                            <a href={e.link} target="_blank" rel="noopener noreferrer"><Button variant="info">Materials</Button></a>
                        </div>
                    </Card>
                </Col>
            );
        });

        return (
            <React.StrictMode>

                <TopBar />

                <div className="top-component">
                    <div className="mm-text-container">
                        <b><h1>More Materials</h1></b>
                        <h2>Just for you</h2>
                    </div>
                </div>

                <Container fluid className="more-materials-container">
                    {
                        this.props.loading ?
                            <Loading /> :
                            <Row>
                                {creditsJSX}
                            </Row>
                    }
                </Container>

            </React.StrictMode>
        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        credits: state.creditsReducer.payload,
        loading: state.creditsReducer.isLoading,
    };
}

export default connect(mapStateToProps)(MoreMaterials);