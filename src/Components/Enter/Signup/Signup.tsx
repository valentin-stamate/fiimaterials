import React from "react";
import Title from "../Title/Title";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BACKEND_URL, LOGIN_URL, SIGNUP_URL} from "../../../Store/globals";
import axios from 'axios';

export default function Signup() {

    const Signup = (e: any) => {
        e.preventDefault();

        const form = document.getElementById('signup-form') as HTMLFormElement;
        const formData = Object.fromEntries(new FormData(form));

        axios({
            method: 'post',
            url: BACKEND_URL + SIGNUP_URL,
            data: formData,
        }).then( (res: any) => {
            console.log(res.status);
            console.log(res.data);
        } )

    }

    return (
        <React.StrictMode>

            <Title name="Signup"/>

            <Form onSubmit={Signup} id="signup-form">
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control className="input-dark" type="text" name="username" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="input-dark" type="email" name="email" />
                    <Form.Text className="text-muted">
                        The email will be used to recover the account/change password. But I have to figure out how to do that first.
                    </Form.Text>
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="input-dark" type="password" name="password" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control className="input-dark" type="password" name="re_password" />
                        </Form.Group>
                    </Col>
                </Row>


                <Button variant="light" type="submit">
                    Signup
                </Button>

                <Link to="/enter/login">
                    <Button variant="dark" className="float-right">
                        Login
                    </Button>
                </Link>


            </Form>

        </React.StrictMode>
    );
}
