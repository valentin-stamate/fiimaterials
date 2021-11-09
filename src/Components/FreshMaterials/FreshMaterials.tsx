import React, {Component} from "react";
import {Alert, Button, ButtonGroup, Col, Container, ListGroup, Row} from "react-bootstrap";
import Loading from "../Loading/Loading";

class FreshMaterials extends Component<any, any> {

    componentDidMount() {}

    render() {

        return (
            <React.StrictMode>
                <Container style={{padding: "4rem 1rem 4rem 1rem"}}>

                    <h2 className="text-center mb-0"><b>Fresh Materials</b></h2>
                    <h6 className="content-color text-center">New and Shine</h6>

                    <div className="flex-center text-black-50" style={{marginTop: "2rem"}}>
                        <a href="https://mega.nz/folder/xM5m2ZjT#mWwmKDllzBQYl8SeCHo5UA" style={{color:"#333"}}
                           className="title-color" target="_blank">
                            <b>[2021-] Archive - Year 1</b>
                        </a>
                    </div>

                </Container>
            </React.StrictMode>
    );
    }
}

export default FreshMaterials;
