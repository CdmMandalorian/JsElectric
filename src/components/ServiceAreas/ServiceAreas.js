import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import SideBar from "../Sidebar/Sidebar";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import socalAreaMap from "../../Assets/Images/socalAreaMap.png";
import ServiceAreasCard from "./ServiceAreasCard"


function ServiceArea (props) {
  
  return (
    <section style={{backgroundColor: "#37505c"}}>
      {/* <SideBar></SideBar> */}

      <Container fluid className="area-section" id="area">

      
      
        <Container  className="area-content">
          <Row >
            <Col md={6} className="area-header">
              <h1 className="headingAreas"style={{marginLeft: "150px"}} >
                 Service Areas
              </h1>
              <ServiceAreasCard></ServiceAreasCard>
            </Col>

            <Col  md={4} style={{ paddingBottom: 10, paddingTop: 10, width: "1350px", height: "700px"}}>
              <img src={socalAreaMap} alt="Socal Map" className="areaMap" />
            </Col>

            </Row>
        </Container>  
      
      </Container>
    </section>
  ); 
} 

export default ServiceArea;
