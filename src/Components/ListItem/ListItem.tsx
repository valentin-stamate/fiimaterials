import React from "react";
import "./ListItem.css";
import {Button} from "react-bootstrap";

const ListItem = (props: any) => {
    return (
        <React.StrictMode>

            <div className="list-container">
                <div className="inline list-title">{props.title}</div>

                <span/>
                <Button className="inline float-right">Action</Button>
            </div>

        </React.StrictMode>
    );
}

export default ListItem;
