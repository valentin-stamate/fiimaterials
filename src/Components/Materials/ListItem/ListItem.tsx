import React from "react";
import "./ListItem.scss";
import {Button, Card, Accordion, useAccordionToggle, OverlayTrigger, Tooltip} from "react-bootstrap";
import RateStar from "../RateStar/RateStar";

// @ts-ignore
function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <Button variant="light"
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}

const ListItem = (props: any) => {

    const rawSiteButton: JSX.Element = <Button onClick={() => window.open(props.site_link, "_blank")} variant="dark" disabled={props.site_link === ''}>Site</Button>;
    let siteButton: JSX.Element = (
            <OverlayTrigger placement="top" overlay={<Tooltip show={props.sitePassword === ''} id="tooltip-top">{props.sitePassword}</Tooltip>}>
                {rawSiteButton}
            </OverlayTrigger>
        );

    if (props.sitePassword === null) {
        siteButton = rawSiteButton;
    }

    if (props.sitePassword !== null && props.sitePassword.length < 2) {
        siteButton = rawSiteButton;
    }

    return (
        <React.StrictMode>

            <Accordion>

                <div className="list-container mat-container">

                    <div className="mat-item-left mat-flex">
                        <b>{props.title}</b>
                    </div>

                    <div className="mat-item-right mat-flex">
                        <b>{props.credits}C</b>

                        <div className="hide-sm">
                          <RateStar classYear={props.classYear} classRating={props.classRating} classID={props.classID} userRating={props.userRating}/>
                        </div>

                        <svg onClick={() => props.material_link !== '' ? window.open(props.material_link, "_blank") : ''}
                             className={(props.material_link !== '' ? 'mega-icon' : 'mega-icon-disabled')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 467 420">
                            <path d="M489.5,79.32V432.68A33.32,33.32,0,0,1,456.18,466H422.82a33.32,33.32,0,0,1-33.32-33.32V209.61a8.53,8.53,0,0,0-14.57-6L268.5,310a17.68,17.68,0,0,1-25,0L137.07,203.58a8.53,8.53,0,0,0-14.57,6V432.68A33.32,33.32,0,0,1,89.18,466H55.82A33.32,33.32,0,0,1,22.5,432.68V79.32A33.32,33.32,0,0,1,55.82,46h37.9a69.48,69.48,0,0,1,49.13,20.35L243.5,167a17.68,17.68,0,0,0,25,0L369.15,66.35A69.48,69.48,0,0,1,418.28,46h37.9A33.32,33.32,0,0,1,489.5,79.32Z" transform="translate(-22.5 -46)"/>
                        </svg>


                        {siteButton}

                        <CustomToggle eventKey="1">About</CustomToggle>

                    </div>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Comming Soon.</Card.Body>
                    </Accordion.Collapse>

                </div>

            </Accordion>
        </React.StrictMode>
    );
}

export default ListItem;
