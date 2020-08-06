import React from "react";
import {connect} from "react-redux";
import ResourceListItem from "./ResourceListItem/ResourceListItem";

const mapStateToProps = (state: any) => {
    return {

    };
}

const Resources = () => {
    return (
        <React.StrictMode>
            <div id="materials" className="container-full-dark">

                <h2 className="text-white text-center mb-0">Resources. Coming Soon...</h2>
                <h6 className="text-white text-center">Just like a girlfriend is for programmers, priceless and hard to find</h6>

            </div>
        </React.StrictMode>
    );
}

export default connect(mapStateToProps)(Resources);
