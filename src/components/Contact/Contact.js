import React from "react";
import { Card, ListGroup, ListGroupItem, Container, Row, Col, } from "react-bootstrap";
// import Particle from "../Particle";
//import SideBar from "../Sidebar/Sidebar";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contactform from "./ConctactForm"
import contactImg from "../../Assets/Images/ps-LampPost.png";


function Contact () {
    return (
        <section style={{ backgroundColor: "#37505c" }}>

            {/* <SideBar></SideBar> */}

            <Container fluid className="contact-section" id="contact">

                {/* <Particle> */}

                <Container className="contact-content">
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <Col
                            md={7}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "50px",
                                border: "2px solid black",
                                maxHeight: "480px"
                            }}
                        >
                            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                                Contact <strong className="green">ME</strong>
                            </h1>
                            <Contactform />
                        </Col>
                        <Col
                            md={5}
                            style={{ paddingTop: "20px", paddingBottom: "20px" }}
                            className="contact-img"
                        >
                            <img src={contactImg} alt="contact" className="img-fluid" />
                        </Col>

                    </Row>
                </Container>
                {/* </Particle> */}
            </Container>
        </section>
    );
}

export default Contact;