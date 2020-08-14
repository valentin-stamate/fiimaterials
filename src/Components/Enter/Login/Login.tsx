import React, {useState} from "react";
import Title from "../Title/Title";
import {Alert, Button, Form} from "react-bootstrap";
import {Link} from 'react-router-dom';
import '../Enter.scss';
import axios from 'axios';
import {BACKEND_URL, EMAIL_REGEX, LOGIN_URL} from "../../../Store/globals";
import {deleteCookies, setCookie, USER_AUTH_TOKEN_COOKIE} from "../../../Store/cookie";

const Login = (props: any) => {

    const [loginSucc, setLoginSucc] = useState(true)

    deleteCookies();

    const Login = (e: any) => {
        e.preventDefault();

        const form = document.getElementById('login-form') as HTMLFormElement;
        const formData = Object.fromEntries(new FormData(form));

        axios({
            method: 'post',
            url: BACKEND_URL + LOGIN_URL,
            data: formData,
        }).then( (res: any) => {

            setCookie(USER_AUTH_TOKEN_COOKIE, res.data.token);

            window.location.href = '/';
            return ;
        }).catch( e => {
            setLoginSucc(false)
        } )

    }

    return (
        <React.StrictMode>

            <Title name="Login" />

            <Form onSubmit={Login} id="login-form">
                <Form.Group>
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control className="input-dark" type="text" name="username_email" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="input-dark" type="password" name="password" />
                </Form.Group>

                {
                    loginSucc ? '' :
                        <Alert variant="dark mt-1">Error</Alert>
                }

                <Button variant="light" type="submit">Login</Button>


                <Link to="/enter/signup">
                    <Button variant="dark" className="float-right">
                        Signup
                    </Button>
                </Link>


            </Form>

        </React.StrictMode>
    );
}

export default Login;
