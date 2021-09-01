import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";



function AreasServedCard(props) {
  
  return (
    <Container>
    <Row>
      <Col sm>Riverside County</Col><Col sm>Los Angeles County</Col><Col>Average Miles: 10</Col><Col>Average Travel Time: 15 minutes</Col>
    </Row>
    <Row>
      <Col sm>San Bernardino County</Col><Col sm>Los Angeles County</Col><Col>Average Miles:25 </Col><Col>Average Travel Time: 30 minutes</Col>
    </Row>
    <Row>
      <Col sm>Orange County</Col><Col>Average Miles: 35</Col><Col>Average Travel Time: 35 minutes</Col>
    </Row>
    <Row>
    <Col sm>Los Angeles County</Col><Col>Average Miles: 55</Col><Col>Average Travel Time: 60 minutes</Col>
    </Row>
    <Row>
      <Col sm>San Diego County</Col><Col>Average Miles: 98</Col><Col>Average Travel Time: 95 minutes</Col>
    </Row>
  </Container>
    
  );
}
export default AreasServedCard;
