import React from "react";
import {Spinner} from "react-bootstrap";
import "./Loading.css";

const Loading = (props: any) => {
    return (
        <React.StrictMode>

            <div className="cnt">
                <div className="spinner-container">
                    <Spinner animation="border" variant={props.color}/>
                </div>
            </div>


        </React.StrictMode>
    );
}

export default Loading;
