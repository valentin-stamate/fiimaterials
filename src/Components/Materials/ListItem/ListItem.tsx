import React from "react";
import "./ListItem.css";
import {Button, Card} from "react-bootstrap";
import RateStar from "../RateStar/RateStar";


const ListItem = (props: any) => {

    const openMaterialLink = () => {
        if (props.material_link !== '') {
            window.open(props.material_link, "_blank");
        }
    }

    const openLink = () => {
        window.open(props.site_link, "_blank");
    }

    return (
        <React.StrictMode>

            <Card className="list-container bg-2">
                <div>
                    <span className="left-side">
                        <div className="inline"><b>{props.title}</b></div>

                    </span>


                    <span className="right-side">


                        <div className="rating-wrapper bg-1 inline">
                            <div className="inline mr-1">
                                <RateStar classYear={props.classYear} classRating={props.classRating} classID={props.classID} />
                            </div>

                            <div className="class-rate-number inline"><b>{props.classRating}</b></div>
                        </div>


                        <svg onClick={openMaterialLink} className={ (props.material_link !== '' ? 'mega-icon' : 'mega-icon-disabled') + ' mr-2'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 467 420">
                            <path d="M489.5,79.32V432.68A33.32,33.32,0,0,1,456.18,466H422.82a33.32,33.32,0,0,1-33.32-33.32V209.61a8.53,8.53,0,0,0-14.57-6L268.5,310a17.68,17.68,0,0,1-25,0L137.07,203.58a8.53,8.53,0,0,0-14.57,6V432.68A33.32,33.32,0,0,1,89.18,466H55.82A33.32,33.32,0,0,1,22.5,432.68V79.32A33.32,33.32,0,0,1,55.82,46h37.9a69.48,69.48,0,0,1,49.13,20.35L243.5,167a17.68,17.68,0,0,0,25,0L369.15,66.35A69.48,69.48,0,0,1,418.28,46h37.9A33.32,33.32,0,0,1,489.5,79.32Z" transform="translate(-22.5 -46)"/>
                        </svg>

                        <Button onClick={openLink} variant="dark" disabled={props.site_link === ''}>Site</Button>
                    </span>
                </div>
            </Card>

        </React.StrictMode>
    );
}

export default ListItem;
