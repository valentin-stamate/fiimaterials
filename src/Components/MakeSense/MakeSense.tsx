import React, {Component} from "react";
import AppAPI from "../../API/AppAPI";
import {Image} from "react-bootstrap";

import Loading from "../Loading/Loading";
import {connect} from "react-redux";
import "./MakeSense.scss";


class MakeSense extends Component<any, any> {

    componentDidMount() {
        this.getDiagram();
    }

    getDiagram() {
        AppAPI.getInstance().getDiagram();
    }

    render() {

        return (
            <React.StrictMode>
                <div id="make_sense" className="component-margin component-padding component-radius dark-component">

                    <h2 className="text-white text-center mb-0">Make Sense?</h2>
                    <h6 className="text-white text-center">If you ever get confused why are you doing X class, then this might be helpful.</h6>

                    {
                        this.props.diagramLoading ?
                            <Loading color="dark"/> :
                            <div className="flex center-items">
                                <Image className="mt-4" src={this.props.diagram.content} rounded fluid/>
                            </div>
                    }

                </div>
            </React.StrictMode>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        diagram: state.diagramReducer.payload,
        diagramLoading: state.diagramReducer.isLoading,
    };
}

export default connect(mapStateToProps)(MakeSense);