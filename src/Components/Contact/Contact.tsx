import React from "react";
import {Button, Container} from "react-bootstrap";

const Contact = () => {
    return (
        <React.StrictMode>

            <Container id="contact" style={{padding:"4rem 1rem 4rem 1rem", maxWidth: "45rem"}}>
                <div className="title-color">
                    <h2 className="mb-4 text-center"><b>Contact</b></h2>
                </div>

                <div className="content-color">
                    <b>
                        <p className="text-justify">For contact, you can sent an email and you'll get a response as quickly as possible. Also if you want to contribute
                        specify the resource(a link or attachment) and if you want somehow to appear in the <i>More Materials</i> section, not necessary with your real information.</p>

                        <p className="text-justify">For whatever reason, don't hesitate to contact me.</p>

                        <Button variant="success" href="mailto:stamatevalentin125@gmail.com?subject=FIIMaterials Contact" target="_blank">Contact Me</Button>
                    </b>
                </div>

            </Container>

        </React.StrictMode>
    );
}

export default Contact;
