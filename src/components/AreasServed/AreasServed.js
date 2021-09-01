import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import SideBar from "../Sidebar/Sidebar";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import socalAreaMap from "../../Assets/Images/socalAreaMap.png";
import Areasservedcard from "./AreasServedCard"


function AreasServed (props) {
  
  return (
    <section style={{backgroundColor: "#37505c"}}>

      {/* <SideBar></SideBar> */}

      <Container fluid className="area-section" id="area">

      {/* <Particle> */}
      
        <Container  className="area-content">
          <Row >
            <Col md={4} style={{height: "700px"}} className="area-header">
              <h1 className="heading" >
                 Areas Served
              </h1>
              <Areasservedcard></Areasservedcard>
            </Col>

            <Col  md={6} style={{ paddingBottom: 10, paddingTop: 10, width: "950px", height: "700px"}}>
              <img src={socalAreaMap} alt="Socal Map" className="areaMap" />
            </Col>

            </Row>
        </Container>  
      {/* </Particle> */}
      </Container>
    </section>
  ); 
} 

export default AreasServed;
