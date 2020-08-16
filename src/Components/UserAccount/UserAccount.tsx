import React, {Component} from "react";
import TopBar from "../TopBar/TopBar";
import {connect} from "react-redux";
import {Badge, Button, Container, Form} from "react-bootstrap";
import Loading from "../Loading/Loading";

class UserAccount extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            formChanged: false,
        };
    }

    // i'll refactor tomorrow

    activateSubmit() {
        this.setState({formChanged: true});
    }

    render() {

        const favoriteCoursesJSX = this.props.userData.favorite_courses.map( (course: string) => {
            return (<Badge pill variant="dark">{course}</Badge>);
        } );

        return (
            <React.StrictMode>

                <TopBar/>

                <Container style={{marginTop: "5rem", maxWidth: "40rem"}}>


                    <h4>User Details</h4>
                    <hr/>

                    {
                        this.props.loading ?
                            <Loading />
                            :
                            <Form>
                                <Form.Group onChange={() => this.activateSubmit()}>
                                    <Form.Label><h6>Username</h6></Form.Label>
                                    <Form.Control type="text" defaultValue={this.props.userData.username}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label><h6>Email</h6></Form.Label>
                                    <Form.Control type="email" value={this.props.userData.email} disabled/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label><h6>Last Login</h6></Form.Label>
                                    <Form.Control type="text" value={this.props.userData.last_login} disabled/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label><h6>Date Joined</h6></Form.Label>
                                    <Form.Control type="text" value={this.props.userData.date_joined} disabled/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Check type="checkbox" label="Is SuperUser" checked={this.props.userData.is_superuser} disabled={this.props.userData.is_superuser}/>
                                    <Form.Text className="text-muted">Even if you are not a super user, you will always be a super human being.</Form.Text>
                                </Form.Group>


                                <h6>Favorite Courses</h6>
                                {favoriteCoursesJSX}

                                <p/>

                                <Button variant="info" type="submit" disabled={!this.state.formChanged}>
                                    Submit
                                </Button>
                            </Form>
                    }



                </Container>

            </React.StrictMode>
        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        userData: state.userData,
        loading: state.userDataLoading,
    };
}

export default connect(mapStateToProps)(UserAccount);