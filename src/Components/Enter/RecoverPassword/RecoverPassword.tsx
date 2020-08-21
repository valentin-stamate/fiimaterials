import React, {FormEvent} from "react";
import Title from "../Title/Title";
import {Button, Form} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import AppAPI from "../../../API/AppAPI";

const RecoverPassword = () => {

    const UseHistory = useHistory();

    const recoverPassword = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const formData = Object.fromEntries(new FormData(form));

        AppAPI.getInstance().sendToRecover(formData);

        UseHistory.push('/enter/verify-token/recover')
    }

    return (
        <React.StrictMode>

            <Title name="Recover Password"/>
            <Form onSubmit={(e) => recoverPassword(e)}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control className="input-dark" type="email" name="email" />
                    <Form.Text className="text-muted">The code will be sent to your email address.</Form.Text>
                </Form.Group>

                <Button type="submit" variant="light"><b>Send</b></Button>

            </Form>

        </React.StrictMode>
    );
};

export default RecoverPassword;