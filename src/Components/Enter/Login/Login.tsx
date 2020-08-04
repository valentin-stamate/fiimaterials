import React from "react";
import Title from "../Title/Title";
import {Button, Form} from "react-bootstrap";
import {Link} from 'react-router-dom';

const inputStyle = {
    backgroundColor: "#232629",
    borderColor: "#3c4045",
    color: "#DBDCDD"
}

export default function Login(props: any) {

    const Login = (e: any) => {
        e.preventDefault();

        const form = document.getElementById('login-form') as HTMLFormElement;

        console.log( Object.fromEntries(new FormData(form)) );
    }

    return (
        <React.StrictMode>

            <Title name="Login" />

            <Form onSubmit={Login} id="login-form">
                <Form.Group>
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control style={inputStyle} type="text" name="email" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={inputStyle} type="password" name="password" />
                </Form.Group>

                <Button variant="light" type="submit">
                    Login
                </Button>

                <Link to="/enter/signup">
                    <Button variant="dark" className="float-right">
                        Signup
                    </Button>
                </Link>


            </Form>

        </React.StrictMode>
    );
}
