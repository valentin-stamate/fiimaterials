import React from "react";
import {Container, Row} from "react-bootstrap";

const Contact = () => {
    return (
        <React.StrictMode>

            <Container id="contact" style={{padding:"4rem 1rem 4rem 1rem", maxWidth: "45rem"}}>
                <div className="title-color">
                    <h2 className="mb-4 text-center"><b>Contact</b></h2>
                </div>

                <div className="content-color">
                    <b>
                    <div>
                        If you want to contact me for any reason like: suggestions, marriage proposal, bugs, date invite or anything else, you can sent an email to <kbd>stamatevalentin125@gmail.com</kbd> and I will respond as quickly as possible.
                    </div>

                    <div>
                       Important! If you are a professor and you own a course that appears on this site, for any problem, contact me with the email subject <div className="inline"><kbd>[Course Copyright]</kbd></div>.
                    </div>
                    </b>
                </div>

            </Container>

        </React.StrictMode>
    );
}

export default Contact;
