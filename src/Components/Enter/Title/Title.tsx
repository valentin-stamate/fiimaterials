import React from "react";
import './Title.css';

const hrStyle = {
    margin:"0 0 1rem 0",
}

export default function Title(props: any) {
    return (
        <React.StrictMode>

            <div className="title-container">
                <b>{props.name}</b>
            </div>

            <hr style={hrStyle}/>

        </React.StrictMode>
    );
}
