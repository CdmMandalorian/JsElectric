import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";



function ServiceAreasCard(props) {
  
  return (
      <Container className="area-container">
          <Row >
              <Col className="servicesAreas">
                  <div class="card">
                      <h5 class="card-header">Inland Empire</h5>
                      <div class="card-body">
                          
                          <p class="card-text">Servicing the Inland Empire area represented in the Map. Inland Cities from Ontario, to San Bernardino. Local to Riverside.</p>
                      </div>
                  </div>
              </Col>
          </Row>
          <Row>
              <Col>
                  <div class="card">
                      <h5 class="card-header">Orange County</h5>
                      <div class="card-body">
                          
                          <p class="card-text">Servicing the Orange County Area, from the Beaches through Irvine into Santa Ana and Anaheim.</p>
                      </div>
                  </div>
              </Col>
          </Row>
          <Row>
              <Col>
                  <div class="card">
                      <h5 class="card-header">Los Angeles</h5>
                      <div class="card-body">
                          
                          <p class="card-text">Now servicing the City of Los Angeles. From the Coast line into the city, throughtought it neighboring cities, dont hesitate to call J's Electric</p>
                      </div>
                  </div>
              </Col>
          </Row>
          <Row>
              <Col>
                  <div class="card">
                      <h5 class="card-header">San Diego</h5>
                      <div class="card-body">
                          
                          <p class="card-text">Also servicing the San Diego Community. Please consider scheduling ahead, Travel time into San Diego is approximately 95 minutes</p>
                      </div>
                  </div>
              </Col>
          </Row>
      </Container>

  );
}
export default ServiceAreasCard;
