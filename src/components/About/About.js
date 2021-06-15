import React from "react";
import { Card, ListGroup, ListGroupItem, Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import SideBar from "../Sidebar/Sidebar";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutImg from "../../Assets/Images/ps-LightSwitch1.png";
import Aboutcard from "./AboutCard"

function About () {
  
  return (
    <section style={{backgroundColor: "#37505c"}}>

      {/* <SideBar></SideBar> */}

      <Container fluid className="about-section" id="about">

        {/* <Particle> */}

        <Container className="about-content">
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
                paddingRight: "150px"
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className="green">ME</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px", paddingRight: "50px" }}
              className="about-img"
            >
              <img src={aboutImg} alt="about" className="img-fluid"  />
            </Col>
          </Row>
        </Container>
      {/* </Particle> */}  
      </Container>
    </section>
  );
} 
export default About;
