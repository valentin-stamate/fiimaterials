import React, {Component} from "react";
import {connect} from "react-redux";
import ResourceListItem from "./ResourceListItem/ResourceListItem";
import {Col, Row} from "react-bootstrap";
import Loading from "../Loading/Loading";
import AppAPI from "../../API/AppAPI";

class Resources extends Component<any, any> {

    componentDidMount() {
        AppAPI.getInstance().getResources();
    }

    render() {

        const resourceFirstCol: JSX.Element[] = [];
        const resourceSecondCol: JSX.Element[] = [];

        this.props.resources.map((res: any, index: number) => {
            const item = <ResourceListItem key={index} title={res.title} imageURL={res.image_url} linkURL={res.link_url} description={res.description} tagList={res.tag_list}/>

            const len: number = parseInt(this.props.resources.length) / 2;
            index < len ? resourceFirstCol.push(item) : resourceSecondCol.push(item);

            return 0;
        })

        return (
            <React.StrictMode>
                <div id="resources" className="container-full dark-component component-padding component-bottom-radius">

                    <h2 className="text-white text-center mb-0">Resources</h2>
                    <h6 className="text-white text-center">Like gold in the sea.</h6>

                    <Row className="container-max-width center">
                        <Col lg={12} xl={6} className="mt-4">
                            {this.props.resourcesLoading ? <Loading color="light"/> : resourceFirstCol}
                        </Col>
                        <Col lg={12} xl={6} className="mt-4">
                            {this.props.resourcesLoading ? <Loading color="light"/> : resourceSecondCol}
                        </Col>
                    </Row>

                </div>
            </React.StrictMode>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        resources: state.resourceReducer.payload,
        resourcesLoading: state.resourceReducer.isLoading,
    };
};

export default connect(mapStateToProps)(Resources);
