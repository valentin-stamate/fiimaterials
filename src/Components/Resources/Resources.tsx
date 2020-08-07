import React from "react";
import {connect} from "react-redux";
import ResourceListItem from "./ResourceListItem/ResourceListItem";
import {Col, Row} from "react-bootstrap";

const mapStateToProps = (state: any) => {
    return {

    };
}

const Resources = () => {
    return (
        <React.StrictMode>
            <div id="materials" className="container-full-dark">

                <h2 className="text-white text-center mb-0">Resources</h2>
                <h6 className="text-white text-center">Just like a girlfriend is for programmers, priceless and hard to find</h6>

                <Row className="container-max-width ml-auto mr-auto">
                    <Col lg={12} xl={6} className="mt-4">

                        <ResourceListItem />

                    </Col>
                    <Col lg={12} xl={6} className="mt-4">

                        <ResourceListItem />

                    </Col>
                </Row>

            </div>
        </React.StrictMode>
    );
}

export default connect(mapStateToProps)(Resources);
