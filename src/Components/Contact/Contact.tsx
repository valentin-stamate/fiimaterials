import React from "react";
import {Container, Row} from "react-bootstrap";

const Contact = () => {
    return (
        <React.StrictMode>

            <Container style={{padding:"3rem"}}>
                <div className="title-color">
                    <h3 className="mb-4 text-center"><b>Contact</b></h3>

                    <div className="content-color">
                        <b>
                        <div>
                            If you want to contact me for any reason like: suggestions, proposal, bugs, date invite or anything else, you can sent an email to <kbd>stamatevalentin125@gmail.com</kbd>.
                        </div>

                        <div>
                           Important! If you are a professor and you own a course that appear on this site. For any problem, contact me with the email subject <div className="inline"><kbd>[Course Copyright]</kbd></div>.
                        </div>
                        </b>
                    </div>
                </div>
            </Container>

        </React.StrictMode>
    );
}

export default Contact;
