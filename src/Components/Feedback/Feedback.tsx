import React, {Component} from 'react';
import './Feedback.scss'
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import FeedbackListItem from "./FeedbackListItem/FeedbackListItem";
import {connect} from 'react-redux';
import Loading from "../Loading/Loading";
import AppAPI from "../../API/AppAPI";


class Feedback extends Component<any, any> {

    componentDidMount() {
        AppAPI.getInstance().getFeedback();
    }

    submitFeedback = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement
        let formData: any = Object.fromEntries(new FormData(form))
        formData = {
            ...formData,
            show_name: formData.show_name === 'on',
        }

        if (formData.message === undefined || formData.message.length < 10) {
            return;
        }

        AppAPI.getInstance().submitFeedback(formData);

        form.reset();
    }

    render() {
        const feedbackListJSX = this.props.feedback.map((feedback: any, index: number) => {
            return (
                <FeedbackListItem key={index} name={feedback.name} dateCreated={feedback.date_created}
                                  checked={feedback.implemented} feedback={feedback.feedback}/>
            );
        });

        return (
            <React.StrictMode>


                <div className="feedback-intro bg-0">
                    <svg onClick={() => this.props.history.push('/')} viewBox="0 0 16 16" className="bi bi-arrow-left-circle-fill back-icon"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.646 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L6.207 7.5H11a.5.5 0 0 1 0 1H6.207l2.147 2.146z"/>
                    </svg>
                    <Container>
                        <h2><b>Le Feedback</b></h2>
                    </Container>
                </div>

                <Container className="mt-4">
                    <Row>
                        <Col sm={12} md={6} className="mb-2">
                            {
                                this.props.userIsAuth ?
                                    ''
                                    :
                                    <Alert variant="warning">
                                        You have to be logged in first in order to submit a feedback.
                                    </Alert>
                            }
                            <Form onSubmit={() => this.submitFeedback} id="feedback-form">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Display Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Your Name"
                                                  value={this.props.userIsAuth && this.props.username !== 'User' ? this.props.username : ''}/>

                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" defaultChecked name="show_name"
                                                    label="Show your name in feedback list"/>
                                    </Form.Group>

                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Feedback</Form.Label>
                                    <Form.Control as="textarea" name="feedback" rows={4} maxLength={255}
                                                  placeholder="Message..."/>
                                </Form.Group>

                                <Button variant="outline-dark" type="submit">
                                    Submit
                                </Button>


                            </Form>
                        </Col>
                        <Col sm={12} md={6}>

                            <div className="text-center center-absolute">

                                Feel free to let a feedback.
                                As you can see you can choose to hide your name from the outside world.
                                Below is a list with all the feedback I received from the beginning of this project
                                and any good idea will be implemented. Btw, I don't know french and I know this page is
                                ugly.

                            </div>

                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col sm={12} md={6}>

                            {
                                this.props.feedbackLoading ?
                                    <Loading/>
                                    :
                                    feedbackListJSX
                            }

                        </Col>

                        <Col/>


                    </Row>
                </Container>

            </React.StrictMode>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        feedback: state.feedbackReducer.payload,
        feedbackLoading: state.feedbackReducer.isLoading,
        username: state.userDataReducer.payload.username,
        userIsAuth: state.appReducer.userIsAuth,
    };
}

export default connect(mapStateToProps)(Feedback);
