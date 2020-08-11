import React from "react";
import './Enter.css';
import {Card, Container} from "react-bootstrap";
import {Switch, Route} from "react-router-dom";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

const Enter = (props: any) => {

    return (
        <React.StrictMode>

            <div className="container-background"/>



                <Card className="enter-container" style={{backgroundColor: "#2a2d30"}}>

                    <Switch>
                        <Route exact path={props.match.url + '/'} component={Login}/>
                        <Route exact path={props.match.url + '/login'} component={Login}/>
                        <Route exact path={props.match.url + '/signup'} component={Signup}/>
                    </Switch>


                </Card>


        </React.StrictMode>
    );
}

export default Enter;
