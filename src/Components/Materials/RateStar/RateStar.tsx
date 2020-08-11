import React, {useState} from "react";
import "./RateStar.css";
import {Badge, OverlayTrigger, Toast, Tooltip} from "react-bootstrap";
import {useHistory} from "react-router-dom"
import {connect} from "react-redux"
import axios from 'axios';
import {BACKEND_URL, GET_CLASSES_URL, SET_RATING_URL} from "../../../Store/globals";
import {getCookie, USER_AUTH_TOKEN_COOKIE} from "../../../Store/cookie";
import {GET_CLASSES, SET_MATERIALS_LOADING} from "../../../Store/actions";

const mapStateToProps = (state: any) => {
    return {
        userIsAuth: state.userIsAuth,
    }
}

const RateStar = (props: any) => {
    // State
    const [showToast, setToast] = useState(false);
    const toggleToast = () => {setToast(!showToast)}

    const initialRating = parseInt(props.classRating) - 1;
    const rateStateInitially = [false, false, false, false, false];
    for (let i = 0; i <= initialRating; i++) {
        rateStateInitially[i] = true;
    }

    const [starArray, setStarArrayValue] = useState(rateStateInitially);

    //
    const useHist = useHistory();
    const openRegister = () => {
        useHist.push('/enter');
    }

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
        const rateStateInitially = [false, false, false, false, false];
        for (let i = 0; i <= initialRating; i++) {
            rateStateInitially[i] = true;
        }
        setStarArrayValue(rateStateInitially);
    }

    const setRating = (e: any) => {
        e.preventDefault();

        const classID = props.classID;
        const rating = parseInt(e.currentTarget.getAttribute('star-id')) + 1;

        if (props.userIsAuth) {

            axios({
                method: 'POST',
                url: BACKEND_URL + SET_RATING_URL,
                headers: {
                  Authorization: "Token " + getCookie(USER_AUTH_TOKEN_COOKIE),
                },
                data: {
                    class_id: classID,
                    rating: rating,
                }
            }).then(res => {
            //    TODO see this login again, in the first request i can get all materials

                axios({
                    method: "post",
                    url: BACKEND_URL + GET_CLASSES_URL,
                    data: {
                        'year': props.classYear,
                    }
                }).then( res => {

                    props.dispatch({
                        type: GET_CLASSES,
                        data: res.data,
                    })

                    props.dispatch({
                        type: SET_MATERIALS_LOADING,
                        data: false,
                    })

                } ).catch(
                    // TODO show an error
                )

            }).catch(e => {
                // TODO react ui
            });

            return;
        }

        setToast(true);
    }

    let map = new Map();
    map.set(0, "Hate It")
    map.set(1, "Bad")
    map.set(2, "Not Great, Not Terrible")
    map.set(3, "Good Enough")
    map.set(4, "Amazing")

    const stars: JSX.Element[] = [];
    // TODO color star progress eg 1 star = red 5 star = yellow
    for (let i = 0; i < 5; i++) {

        stars.push(
            <OverlayTrigger placement="top" key={i}
                overlay={
                    <Tooltip id="tooltip-top">
                        <strong>{map.get(i)}</strong>
                    </Tooltip>
                }
            >
                <div onMouseLeave={resetStars} className="star-wrapper inline">
                    <svg onClick={setRating} onMouseEnter={updateStars} star-id={i} style={{fill: starArray[i] ? "#FDD835" : "#282828" }} className="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.9 475.78">
                        <title>star</title>
                            <path d="M276.51,30.86l59.21,120a22.86,22.86,0,0,0,17.22,12.51l132.4,19.24c18.76,2.72,26.26,25.78,12.68,39L402.21,315a22.83,22.83,0,0,0-6.57,20.24L418.25,467.1c3.21,18.68-16.4,32.93-33.18,24.11L266.64,429a22.88,22.88,0,0,0-21.28,0L126.93,491.21c-16.78,8.82-36.39-5.43-33.18-24.11l22.61-131.87A22.83,22.83,0,0,0,109.79,315L14,221.6c-13.58-13.23-6.08-36.29,12.68-39l132.4-19.24a22.86,22.86,0,0,0,17.22-12.51l59.21-120C243.88,13.86,268.12,13.86,276.51,30.86Z" transform="translate(-7.05 -18.11)"/>
                    </svg>
                </div>


            </OverlayTrigger>
        );
    }

    return (
        <React.StrictMode>

            <div>
                {stars}
            </div>

            <Toast show={showToast} onClose={toggleToast} className="star-toast bg-dark">
                <Toast.Header>
                    <strong className="mr-auto">Glad You're Here</strong>
                </Toast.Header>
                <Toast.Body>Before rating a class you need to  <Badge variant="light" onClick={openRegister}>Register</Badge> first.</Toast.Body>
            </Toast>

        </React.StrictMode>
    );
}

export default connect(mapStateToProps)(RateStar);

// Created by Valentin Stamate
// If you like it give it a star
