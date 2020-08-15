import React, {useState} from "react";
import Title from "../Title/Title";
import {Alert, Badge, Button, Form, Spinner} from "react-bootstrap";
import AppAPI from "../../../API/AppAPI";
import {useHistory} from 'react-router-dom'

const VerifyEmail = (props: any) => {

    const [error, setErrorStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const UseHistory = useHistory();

    const SentVerificationToken = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const formData = Object.fromEntries(new FormData(form));
        form.reset();

        const request = AppAPI.getInstance().sendVerificationToken(formData.token as string);

        setLoading(true);
        setErrorStatus(false);

        request.then(result => {
            UseHistory.push('/enter/login/')
        }).catch(e => {
            setLoading(false);
            setErrorStatus(true);
        })

    }

    return (
        <React.StrictMode>
            <Title name="Verify Email"/>

            <Form onSubmit={SentVerificationToken}>
                <Form.Group>
                    <Form.Label>Code</Form.Label>
                    <Form.Control className="input-dark" type="text" name="token"/>
                    <Form.Text className="text-muted">
                        The code is sent to your email address. If you see nothing verify the <Badge variant="danger">Spam</Badge> folder.
                    </Form.Text>

                </Form.Group>

                { error ? <Alert variant="danger">Error</Alert> : '' }

                <Button variant="light" type="submit" disabled={loading}>
                    {loading ? <Spinner className="mr-1" as="span" animation="border" size="sm" role="status" aria-hidden="true"/> : ''}
                    Verify
                </Button>

            </Form>

        </React.StrictMode>
    );
}

export default VerifyEmail;