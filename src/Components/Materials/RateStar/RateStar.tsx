import React, {useState} from "react";
import "./RateStar.css";

const RateStar = (props: any) => {

    const [starArray, setStarArrayValue] = useState([false, false, false, false, false]);

    const updateStars = (event: any) => {
        event.preventDefault();
        const newStarState: boolean[] = [false, false, false, false, false];

        const starNumber = event.currentTarget.getAttribute("star-id");

        for (let i = 0; i <= starNumber; i++) {
            newStarState[i] = true;
        }

        setStarArrayValue(newStarState);

    }

    const resetStars = () => {
        setStarArrayValue([false, false, false, false, false]);
    }

    const stars: JSX.Element[] = [];

    for (let i = 0; i < 5; i++) {
        stars.push(
            <svg onMouseEnter={updateStars} star-id={i} key={i} style={{fill: starArray[i] ? "#FDD835" : "#303030" }} className="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.9 475.78">
                <title>star</title>
                    <path d="M276.51,30.86l59.21,120a22.86,22.86,0,0,0,17.22,12.51l132.4,19.24c18.76,2.72,26.26,25.78,12.68,39L402.21,315a22.83,22.83,0,0,0-6.57,20.24L418.25,467.1c3.21,18.68-16.4,32.93-33.18,24.11L266.64,429a22.88,22.88,0,0,0-21.28,0L126.93,491.21c-16.78,8.82-36.39-5.43-33.18-24.11l22.61-131.87A22.83,22.83,0,0,0,109.79,315L14,221.6c-13.58-13.23-6.08-36.29,12.68-39l132.4-19.24a22.86,22.86,0,0,0,17.22-12.51l59.21-120C243.88,13.86,268.12,13.86,276.51,30.86Z" transform="translate(-7.05 -18.11)"/>
            </svg>
        );
    }

    return (
        <React.StrictMode>

            <div onMouseLeave={resetStars}>
                {stars}
            </div>


        </React.StrictMode>
    );
}

export default RateStar;

// Created by Valentin Stamate
// If you like it give it a star
