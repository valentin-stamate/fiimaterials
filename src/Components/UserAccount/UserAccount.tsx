import React, {Component} from "react";
import TopBar from "../TopBar/TopBar";
import {connect} from "react-redux";
import {Alert, Badge, Button, Container, Form} from "react-bootstrap";
import Loading from "../Loading/Loading";
import AppAPI from "../../API/AppAPI";

class UserAccount extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            formChanged: false,
            passwordError: '',
            updateError: false,
            updateMessage: '',
        };
    }

    componentDidMount() {
        if (!this.props.userIsAuth) {
            window.location.href = '/enter';
        }
    }

    activateSubmit(e: any) {
        e.preventDefault();

        const password = (e.currentTarget as HTMLInputElement).value;

        if (password.length < 8) {
            this.setState({formChanged: false});
            return;
        }

        this.setState({formChanged: true});
    }

    sendUpdatedUser(e: React.FormEvent<HTMLElement>) {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const formData = Object.fromEntries(new FormData(form));

        if ((formData.new_password as string).length !== 0 && (formData.new_password as string).length < 8) {
            this.setState({passwordError: 'The password should have at least 8 characters.'})
            return;
        }

        if (formData.new_password !== formData.confirm_new_password) {
            this.setState({passwordError: 'Passwords don\'t match'});
            return;
        }

        const newUserData = {
            username: formData.username,
            email: formData.email,
            new_password: formData.new_password,
            password: formData.password,
        }

        const request = AppAPI.getInstance().updateProfile(newUserData);
        request.then(result => {
            this.setState({updateError: false, updateMessage: result.data})
            window.location.href = '/user-account';
        }).catch(e => {
            this.setState({updateError: true, updateMessage: e.response.data})
        })


    }

    logout() {
        AppAPI.getInstance().deleteCookies();
        window.location.href = '/';
    }

    render() {

        const favoriteCoursesJSX = this.props.userData.favorite_courses.map( (course: string, index: number) => {
            return (<Badge key={index} pill variant="dark" className="mr-2">{course}</Badge>);
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
                            <Form onSubmit={(e) => this.sendUpdatedUser(e)}>
                                <Form.Group>
                                    <Form.Label><h6>Username</h6></Form.Label>
                                    <Form.Control name="username" type="text" defaultValue={this.props.userData.username}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label><h6>Email</h6></Form.Label>
                                    <Form.Control name="email" type="email" defaultValue={this.props.userData.email}/>
                                    <Form.Text className="text-muted">The email won't be changed directly. You'll receive an email to you new address to confirm it.</Form.Text>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label><h6>New Password</h6></Form.Label>
                                    <Form.Control name="new_password" type="password"/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label><h6>Confirm New Password</h6></Form.Label>
                                    <Form.Control name="confirm_new_password" type="password"/>
                                    {
                                        this.state.passwordError !== '' ?
                                            <Form.Text className="text-danger">{this.state.passwordError}</Form.Text> : ''
                                    }
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label><h6>Current Password <span className="text-danger">*</span></h6></Form.Label>
                                    <Form.Control name="password" onChange={(e: any) => this.activateSubmit(e)} type="password"/>
                                    <Form.Text className="text-muted">In order to change your user details you have to enter your current password.</Form.Text>
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
                                    Update
                                </Button>

                                <Button variant="warning" onClick={this.logout} className="float-right">
                                    LogOut
                                </Button>

                                {
                                    this.state.updateMessage !== '' ?
                                        <Alert variant={this.state.updateError ? 'danger' : 'success'} className="mt-2">
                                            {this.state.updateMessage}
                                        </Alert> : ''
                                }

                            </Form>
                    }

                </Container>

            </React.StrictMode>
        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        userData: state.userDataReducer.payload,
        loading: state.userDataReducer.isLoading,
        userIsAuth: state.appReducer.userIsAuth,
    };
}

export default connect(mapStateToProps)(UserAccount);