import React, {Component} from "react";
import "./RateStar.scss";
import {Badge, OverlayTrigger, Toast, Tooltip} from "react-bootstrap";
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import AppAPI from "../../../API/AppAPI";

class RateStar extends Component<any, any> {

    starText: Map<number, string> = new Map();
    starColor: Map<number, string> = new Map();
    nullStarActivated = [false, false, false, false, false]

    constructor(props: any) {
        super(props);
        this.state = {
            showToast: false,
            starActivated: [...this.nullStarActivated],
        }

    }

    initializeStarText() {
        this.starText.set(0, "Hate It");
        this.starText.set(1, "Bad");
        this.starText.set(2, "Not Great, Not Terrible");
        this.starText.set(3, "Good Enough");
        this.starText.set(4, "Amazing");
    }

    initializeStarColor() {
        // https://coolors.co/gradient-palette
        this.starColor.set(1, "#EC603C");
        this.starColor.set(2, "#F07E3A");
        this.starColor.set(3, "#F59C39");
        this.starColor.set(4, "#F9BA37");
        this.starColor.set(5, "#FDD835");
    }

    componentDidMount() {
        this.initializeStarText();
        this.initializeStarColor();
        this.resetStars();
    }

    setRating(rating: number) {
        if (this.props.userIsAuth) {
            AppAPI.getInstance().setRating(this.props.classID, rating);
        } else {
            this.setState({showToast: !this.state.showToast});
        }
    }

    updateStars(rating: number) {
        const newStarActivatedState = [...this.nullStarActivated];
        for (let i = 0; i <= rating; i++) {
            newStarActivatedState[i] = true;
        }
        this.setState({starActivated: newStarActivatedState})

    }


    resetStars() {
        const initialStarActivatedState = [...this.nullStarActivated];
        for (let i = 0; i < parseInt(this.props.classRating); i++) {
            initialStarActivatedState[i] = true;
        }
        this.setState({starActivated: initialStarActivatedState})
    }

    render() {

        const starsJSX: JSX.Element[] = [];
        // TODO color star progress eg 1 star = red 5 star = yellow
        for (let i = 0; i < 5; i++) {
            starsJSX.push(
                <OverlayTrigger placement="top" key={i} overlay={<Tooltip id="tooltip-top"><strong>{this.starText.get(i)}</strong></Tooltip>}>

                    <div className="star-wrapper inline"
                         onMouseLeave={() => this.resetStars()}
                         onClick={() => this.setRating(i + 1)}
                         onMouseEnter={() => this.updateStars(i)}>
                        <svg className="star" style={{fill: this.state.starActivated[i] ? this.starColor.get(i+1) : "#282828"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.9 475.78">
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
                    {starsJSX}
                </div>

                <Toast show={this.state.showToast} onClose={() => this.setState({showToast: !this.state.showToast})} className="star-toast bg-dark">
                    <Toast.Header>
                        <strong className="mr-auto">Glad You're Here</strong>
                    </Toast.Header>
                    <Toast.Body>Before rating a class you need to <Link to="/enter"><Badge variant="light">Register</Badge></Link> first.</Toast.Body>
                </Toast>

            </React.StrictMode>
        );
    }
}


const mapStateToProps = (state: any) => {
    return {
        userIsAuth: state.userIsAuth,
    }
}

export default connect(mapStateToProps)(RateStar);
