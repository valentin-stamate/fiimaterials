import React, {useState} from "react";
import Title from "../Title/Title";
import {Alert, Button, Form, Spinner} from "react-bootstrap";
import {Link} from 'react-router-dom';
import '../Enter.scss';
import {setCookie, USER_AUTH_TOKEN_COOKIE} from "../../../Global/cookie";
import AppAPI from "../../../API/AppAPI";

const Login = () => {

    const [loginError, setLoginStatus] = useState(false);
    const [loading, setLoading] = useState(false);

    const Login = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const formData = Object.fromEntries(new FormData(form));

        const request = AppAPI.getInstance().login(formData)

        setLoading(true);
        setLoginStatus(false);

        request.then( (res: any) => {

            setCookie(USER_AUTH_TOKEN_COOKIE, res.data.token);

            window.location.href = '/';

        }).catch( e => {
            setLoading(false);
            setLoginStatus(true);
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

                {loginError ? <Alert variant="dark mt-1">Error</Alert> : ''}

                <Button variant="light" type="submit" disabled={loading}>
                    {loading ? <Spinner className="mr-1" as="span" animation="border" size="sm" role="status" aria-hidden="true"/> : ''}
                    Login
                </Button>


                <Link to="/enter/signup">
                    <Button variant="dark" className="float-right">
                        Signup
                    </Button>
                </Link>

                <Link to="/enter/recover-password">
                    <Button variant="outline-dark text-white" className="ml-2">
                        Recover Password
                    </Button>
                </Link>
            </Form>

        </React.StrictMode>
    );
}

export default Login;
