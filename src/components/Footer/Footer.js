import React from "react";
import {Container, Col, Row} from "react-bootstrap"
import logo from "../../Assets/Images/J'sLogo.png"

function Footer() {
    return (
        <footer style={footerStyle}>
            <Container>
                <Row>
                    <Col>
                        CONTACT INFO
                        <br></br>
                        <br></br>
                        JESSE SALAZAR
                        <br></br>
                        714 - 472 - 3801
                        <br></br>
                        <br></br>
                        Independent Licensed Electrician
                        <br></br>
                        Se Habla Español
                    </Col>
                    <Col>
                    <Col>
                        SERVICES
                        <br></br>
                        <br></br>
                        Emergency Electrician
                        <br></br>
                        Electric Panels
                        <br></br>
                        EV Charger Installations
                        <br></br>
                        Solar Panels
                        <br></br>
                        Lighting Installations + more...
                        <br></br>
                    </Col>
                    </Col>
                    <Col>
                        BUSINESS HOURS
                        <br></br>
                        <br></br>
                        24/7 Emergency Service Available
                        <br></br>
                        Monday - Saturday:
                        <br></br>
                        Sunday:
                        <br></br>
                        <br></br>
                        GENERAL QUESTIONS CALL TODAY
                   
                    </Col>
                    <Col>
                        <img style={{height: "205 px", paddingLeft: "380 px" }} src={logo} className="img-fluid logoS " alt="brand" />
                    </Col>
                </Row>
            </Container>



        </footer>
    )
}
const footerStyle ={
    background: "#929ca6",
    color: "#cdd1d5",
    textAlign: "center",
    padding: "10px",
    position: "relative",
    left: "0",
    bottom: "0",
    width: "100%",
    borderTop: "10px solid #cdd1d5",
    display: "flex",
    paddingTop: "2%"
}

export default Footer;
                    
                    