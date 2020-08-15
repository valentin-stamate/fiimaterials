import React, {Component} from "react";
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import "./Links.scss";
import {connect} from 'react-redux';
import Loading from "../Loading/Loading";
import AppAPI from "../../API/AppAPI";

class Links extends Component<any, any> {

    componentDidMount() {
        AppAPI.getInstance().getLinks();
    }

    render() {

        const linksFirstColJSX: JSX.Element[] = [];
        const linksSecondColJSX: JSX.Element[] = [];

        this.props.links.map((link: any, index: number) => {
            const el = (
                <ListGroup.Item key={index}>
                    <div className="float-left inline" style={{verticalAlign: "middle", lineHeight: "2.25rem"}}>{link.name}</div>
                    <Button className="float-right inline" variant="dark" href={link.link} target="_blank">Link</Button>
                </ListGroup.Item>
            );

            const len: number = parseInt(this.props.links.length) / 2;
            index <= len ? linksFirstColJSX.push(el) : linksSecondColJSX.push(el);
            return 0;
        });

        return (
            <React.StrictMode>
                <div id="links"/>
                <Container style={{padding: "4rem 1rem 4rem 1rem"}}>

                    <h2 className="title-color text-center mb-0"><b>Useful Links</b></h2>
                    <h6 className="content-color text-center">Feeling lost? Here are some links you can use</h6>

                    <Row className="mt-4">
                        <Col md={12} lg={6}>

                            <ListGroup>
                                {this.props.linksLoading ? <Loading color="dark"/> : linksFirstColJSX}
                            </ListGroup>

                        </Col>
                        <Col md={12} lg={6}>

                            <ListGroup>
                                {this.props.linksLoading ? <Loading color="dark"/> : linksSecondColJSX}
                            </ListGroup>

                        </Col>
                    </Row>

                </Container>
            </React.StrictMode>
        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        links: state.links,
        linksLoading: state.linksLoading,
    };
}

export default connect(mapStateToProps)(Links);
