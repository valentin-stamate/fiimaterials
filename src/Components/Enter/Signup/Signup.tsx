import React, {Component, useState} from "react";
import Title from "../Title/Title";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import AppAPI from "../../../API/AppAPI";
import {Link, useHistory} from 'react-router-dom';
import {EMAIL_REGEX} from "../../../Store/globals";

const Signup = () => {

    const [usernameError, setUsernameStatus] = useState(false);
    const [emailError, setEmailStatus] = useState(false);
    const [passwordError, setPasswordStatus] = useState(false);
    const [loading, setLoading] = useState(false);

    const UseHistory = useHistory();

    const checkFormValidation = (formData: any): boolean => {

        const usernameStatus = formData.username.length < 8;
        const emailStatus = !EMAIL_REGEX.test(String(formData.email).toLowerCase());
        const passwordStatus = formData.password.length < 8 || formData.password !== formData.re_password;

        setUsernameStatus(usernameStatus);
        setEmailStatus(emailStatus);
        setPasswordStatus(passwordStatus);

        return !usernameStatus && !emailStatus && !passwordStatus;
    }

    const signup = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const formData = Object.fromEntries(new FormData(form));


        if (!checkFormValidation(formData)) {
            return;
        }


        const request = AppAPI.getInstance().signup(formData);

        setLoading(true);

        request.then(result => {
            form.reset();
            UseHistory.push('/enter/verify-email');
        }).catch(e => {
            // TODO react ui
        })


    }

    return (
        <React.StrictMode>

            <Title name="Signup"/>

            <Form onSubmit={(e) => signup(e)} id="signup-form">
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control className="input-dark" type="text" name="username"/>
                    {usernameError ? <Form.Text className="text-danger">Username must be at least 8 characters.</Form.Text> : ''}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="input-dark" type="email" name="email"/>
                    {emailError ? <Form.Text className="text-danger">Enter a valid email.</Form.Text> : ''}
                    <Form.Text className="text-muted">
                        The email will be used to recover the account/change password. But I have to figure out how to do that first.
                    </Form.Text>

                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="input-dark" type="password" name="password"/>
                            {passwordError ? <Form.Text className="text-danger">Password should be at least 8 characters and should match.</Form.Text> : ''}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control className="input-dark" type="password" name="re_password"/>
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="light" type="submit" disabled={loading}>
                    {
                        loading ? <Spinner className="mr-1" as="span" animation="border" size="sm" role="status" aria-hidden="true"/> : ''
                    }
                    Signup
                </Button>

                <Link to='login'>
                    <Button variant="dark" className="float-right">
                        Login
                    </Button>
                </Link>

            </Form>

        </React.StrictMode>
    );
}

export default Signup;
