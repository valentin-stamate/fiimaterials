import React from "react";
import './Enter.scss';
import {Card} from "react-bootstrap";
import {Switch, Route} from "react-router-dom";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import VerifyEmail from "./VerifyEmail/VerifyEmail";
import {deleteCookies} from "../../Store/cookie";

const Enter = (props: any) => {

    deleteCookies();

    return (
        <React.StrictMode>

            <div className="enter-container">
                <Card className="enter-box">

                    <Switch>
                        <Route exact path={props.match.url + '/'} component={Login}/>
                        <Route exact path={props.match.url + '/login'} component={Login}/>
                        <Route exact path={props.match.url + '/signup'} component={Signup}/>
                        <Route exact path={props.match.url + '/verify-email'} component={VerifyEmail}/>
                    </Switch>

                </Card>
            </div>

        </React.StrictMode>
    );
}

export default Enter;
