import React from "react";
import './Enter.scss';
import {Card} from "react-bootstrap";
import {Switch, Route} from "react-router-dom";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import VerifyToken from "./VerifyToken/VerifyToken";
import {deleteCookies} from "../../Global/cookie";
import RecoverPassword from "./RecoverPassword/RecoverPassword";

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
                        <Route exact path={props.match.url + '/recover-password'} component={RecoverPassword}/>
                        <Route path={props.match.url + '/verify-token'} component={VerifyToken}/>
                    </Switch>

                </Card>
            </div>

        </React.StrictMode>
    );
}

export default Enter;
