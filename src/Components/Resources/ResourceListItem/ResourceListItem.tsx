import React from "react";
import {Badge, Card} from "react-bootstrap";
import "./ResourceListItem.css";

const ResourceListItem = () => {

    const videoId = "lPx0n6X0d8g";

    return (
        <React.StrictMode>

            <Card className="list-container text-white list-bg-dark">
                <div>

                    <div className="float-left">

                        <div className="list-thumbnail-container">
                            <a href={"https://www.youtube.com/watch?v=" + videoId} target="_blank" rel="noopener noreferrer">
                                <img className="list-thumbnail" src={"https://img.youtube.com/vi/" + videoId + "/0.jpg"} alt="Thumbnail" />
                            </a>
                        </div>

                    </div>

                    <div className="resource-description-container">
                        <div className="resource-description">
                            <div>
                                Lorem ipsum dolor sit amet
                            </div>
                        </div>
                    </div>


                </div>
            </Card>

            <div className="tag-list">
                <Badge pill variant="primary">Music</Badge>
            </div>

        </React.StrictMode>
    );
}

export default ResourceListItem;
