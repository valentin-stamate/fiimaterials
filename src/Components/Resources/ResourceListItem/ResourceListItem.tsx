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
    colorMap.set('android', "#5BB462");
    colorMap.set('all', "#4285F4");
    colorMap.set('article', "#4A154B");
    colorMap.set('course', "#EA5252");
    colorMap.set('math', "#FDD835");
    colorMap.set('algorithm design', "#FF9800");
    colorMap.set('programming', "#3F51B5");
    colorMap.set('data structures', "#FF5722");
    colorMap.set('afcs', "#FFD54F");
    colorMap.set('os', "#78517C");

    colorMap.set('programmer life', "#434343");
    colorMap.set('programmer tips', "#282828");
    colorMap.set('meme', "#2D2D2D");



    const tagListSplit = props.tagList.split(" ");

    const tagListJSX: JSX.Element[] = tagListSplit.map( (tag: string, index: number) => {
        const processedTag = tag.replace(/_/g, " ");
        return (
            <Badge pill variant="primary" style={{backgroundColor: colorMap.get(processedTag)}} className="mr-2" key={index}>{processedTag}</Badge>
        );
    } );

    return (
        <React.StrictMode>

            <Card className="list-container mt-2 bg-2">
                <div>

                    <div className="float-left">
                        <OverlayTrigger placement="top"
                                        overlay={
                                            <Tooltip id="tooltip-top">
                                                <strong>{props.title}</strong>
                                            </Tooltip>
                                        }>

                            <a href={props.linkURL} target="_blank" rel="noopener noreferrer">
                                <div className="list-thumbnail-container">
                                        <img className="list-thumbnail" src={props.imageURL} alt="Thumbnail" />
                                </div>
                            </a>

                        </OverlayTrigger>

                    </div>

                    <div className="resource-description-container">
                        <div className="resource-description">
                            <div>
                                <b>{props.description}</b>
                            </div>
                        </div>
                    </div>


                </div>
            </Card>

            <div className="tag-list bg-1">
                {tagListJSX}
            </div>

        </React.StrictMode>
    );
}

export default ResourceListItem;
