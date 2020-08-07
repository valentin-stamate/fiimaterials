import React from "react";
import {Badge, Card, OverlayTrigger, Tooltip} from "react-bootstrap";
import "./ResourceListItem.css";

const ResourceListItem = (props: any) => {
    // https://visme.co/blog/logo-color-schemes/
    const colorMap = new Map();
    colorMap.set('oop', "#7582C0");
    colorMap.set('programming', "#3F8F8B");
    colorMap.set('algorithms', "#6460AA");
    colorMap.set('fun', "#FF6D56");

    const tagListSplit = props.tagList.split(" ");

    const tagListJSX: JSX.Element[] = tagListSplit.map( (tag: any, index: number) => {
        return (
            <Badge pill variant="primary" style={{backgroundColor: colorMap.get(tag)}} className="mr-2" key={index}>{tag}</Badge>
        );
    } );

    return (
        <React.StrictMode>

            <Card className="list-container text-white list-bg-dark mt-2">
                <div>

                    <div className="float-left">
                        <OverlayTrigger placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-top">
                                                <strong>{props.title}</strong>
                                            </Tooltip>
                                        }>

                            <div className="list-thumbnail-container">
                                <a href={props.linkURL} target="_blank" rel="noopener noreferrer">
                                    <img className="list-thumbnail" src={props.imageURL} alt="Thumbnail" />
                                </a>
                            </div>

                        </OverlayTrigger>

                    </div>

                    <div className="resource-description-container">
                        <div className="resource-description">
                            <div>
                                {props.description}
                            </div>
                        </div>
                    </div>


                </div>
            </Card>

            <div className="tag-list">
                {tagListJSX}
            </div>

        </React.StrictMode>
    );
}

export default ResourceListItem;
