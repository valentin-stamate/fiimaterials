import React from "react";
import {Container} from "react-bootstrap";

const Contact = () => {
    return (
        <React.StrictMode>

            <Container id="contact" style={{padding:"4rem 1rem 4rem 1rem", maxWidth: "45rem"}}>
                <div className="title-color">
                    <h2 className="mb-4 text-center"><b>Contact</b></h2>
                </div>

                <div className="content-color">
                    <b>
                        <p>If you want to contact us(well me) for reason like suggestions, marriage proposal, bugs, date invite, questions or anything else, you can sent an email to <code>stamatevalentin125@gmail.com</code> and you'll get a response as quickly as possible.</p>

                        <p className="mt-2 text-info">If you are a professor and you own a course that appears on this site, for any problem, contact me with the email subject <div className="inline"><code>[Course Copyright]</code></div>.</p>
                    </b>
                </div>

            </Container>

        </React.StrictMode>
    );
}

export default Contact;
