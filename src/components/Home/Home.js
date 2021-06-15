import React from "react";
import {  Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Particle from "../Particle";
import homeLogo from "../../Assets/Images/ps-chandelier.png"
import Type from "./Type";
// import SideBar from "../Sidebar/Sidebar";

function Home() {
  
  return (
    <section style={{backgroundColor: "#37505c"}}>

      {/* <SideBar></SideBar> */}

      <Container fluid className="home-section" id="home">

      {/* <Particle> */}
      
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome <span className="wave">💡</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JESSE SALAZAR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type  />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 80, paddingTop: 10, }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" style={{paddingLeft: 110}} />
            </Col>
          </Row>
        </Container>  
      {/* </Particle> */}
      </Container>
    </section>
  );
}

export default Home;
