import React from "react";
import {Form} from "react-bootstrap";
import './FeedbackListItem.scss';

const FeedbackListItem = (props: any) => {
    return (
        <React.StrictMode>

            <div className="feedback-list-container text-dark">

                <div>
                    <div>
                        {props.name}
                    </div>

                    <small>
                        {props.dateCreated}
                    </small>
                </div>

                <div>
                    <Form.Check className="flex-right" type="checkbox" checked={props.checked} disabled/>
                </div>

            </div>

            <div className="list-message">
                {props.feedback}
            </div>

        </React.StrictMode>
    );
}

export default FeedbackListItem;
