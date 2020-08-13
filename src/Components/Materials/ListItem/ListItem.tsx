import React from "react";
import "./ListItem.scss";
import {Button, Card} from "react-bootstrap";
import RateStar from "../RateStar/RateStar";


const ListItem = (props: any) => {
    const starColor = new Map();
    starColor.set(0, "#282828");
    starColor.set(1, "#EC603C");
    starColor.set(2, "#F07E3A");
    starColor.set(3, "#F59C39");
    starColor.set(4, "#F9BA37");
    starColor.set(5, "#FDD835");

    return (
        <React.StrictMode>

            <Card className="materials-list-container bg-2">

                <div className="list-spacer text-white mt-sm-0">

                    <div className="materials-title">
                        <b>{props.title}</b>
                    </div>

                    <div className="materials-content">


                        <div className="rating-wrapper mr-2 bg-1 inline">
                            <div className="inline">
                                <RateStar classYear={props.classYear} classRating={props.classRating} classID={props.classID}/>
                            </div>

                            <div className="class-rate-number inline"><b>{props.classRating}</b></div>
                        </div>

                            {
                                props.userIsAuth ?
                                    <div className="rating-wrapper inline bg-1 mr-2">
                                        <svg className="star" style={{fill: starColor.get(props.userRating)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.9 475.78">
                                            <title>star</title>
                                            <path d="M276.51,30.86l59.21,120a22.86,22.86,0,0,0,17.22,12.51l132.4,19.24c18.76,2.72,26.26,25.78,12.68,39L402.21,315a22.83,22.83,0,0,0-6.57,20.24L418.25,467.1c3.21,18.68-16.4,32.93-33.18,24.11L266.64,429a22.88,22.88,0,0,0-21.28,0L126.93,491.21c-16.78,8.82-36.39-5.43-33.18-24.11l22.61-131.87A22.83,22.83,0,0,0,109.79,315L14,221.6c-13.58-13.23-6.08-36.29,12.68-39l132.4-19.24a22.86,22.86,0,0,0,17.22-12.51l59.21-120C243.88,13.86,268.12,13.86,276.51,30.86Z" transform="translate(-7.05 -18.11)"/>
                                        </svg>

                                        <div className="inline ml-2">
                                            <b>{props.userRating}</b>
                                        </div>
                                    </div>
                                    :
                                    ''
                            }

                        <svg onClick={() => props.material_link !== '' ? window.open(props.material_link, "_blank") : ''}
                             className={(props.material_link !== '' ? 'mega-icon' : 'mega-icon-disabled') + ' mr-2'}
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 467 420">
                            <path
                                d="M489.5,79.32V432.68A33.32,33.32,0,0,1,456.18,466H422.82a33.32,33.32,0,0,1-33.32-33.32V209.61a8.53,8.53,0,0,0-14.57-6L268.5,310a17.68,17.68,0,0,1-25,0L137.07,203.58a8.53,8.53,0,0,0-14.57,6V432.68A33.32,33.32,0,0,1,89.18,466H55.82A33.32,33.32,0,0,1,22.5,432.68V79.32A33.32,33.32,0,0,1,55.82,46h37.9a69.48,69.48,0,0,1,49.13,20.35L243.5,167a17.68,17.68,0,0,0,25,0L369.15,66.35A69.48,69.48,0,0,1,418.28,46h37.9A33.32,33.32,0,0,1,489.5,79.32Z"
                                transform="translate(-22.5 -46)"/>
                        </svg>

                        <Button onClick={() => window.open(props.site_link, "_blank")} variant="dark" disabled={props.site_link === ''}>Site</Button>

                    </div>
                </div>



            </Card>

        </React.StrictMode>
    );
}

export default ListItem;
