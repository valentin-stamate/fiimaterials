import React from "react";
import './Enter.scss';
import {Card} from "react-bootstrap";
import {Switch, Route} from "react-router-dom";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

const Enter = (props: any) => {

    return (
        <React.StrictMode>

            <div className="enter-container">
                <Card className="enter-box">

                    <Switch>
                        <Route exact path={props.match.url + '/'} component={Login}/>
                        <Route exact path={props.match.url + '/login'} component={Login}/>
                        <Route exact path={props.match.url + '/signup'} component={Signup}/>
                    </Switch>

                </Card>
            </div>





        </React.StrictMode>
    );
}

export default Enter;
