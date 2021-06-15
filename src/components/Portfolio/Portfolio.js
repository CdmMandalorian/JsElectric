import React  from 'react';
import { Card, ListGroup, ListGroupItem, Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Portfoliocard from "./PortfolioCard"
// import Particle from '../Particle';
//import SideBar from "../Sidebar/Sidebar";

import mainPanel from "../../Assets/Images/panel1.jpg";
import doubleChan from "../../Assets/Images/doubleChan.jpg"
import LampPost2 from "../../Assets/Images/LampPost2.jpg"
import solarP from "../../Assets/Images/solarp.jpg"
import panel2 from "../../Assets/Images/panel2.jpg";
import panel3 from "../../Assets/Images/panel3.jpg";
import panel4 from "../../Assets/Images/panel4.jpg";
import panel5 from "../../Assets/Images/panel5.jpg";
import panel6 from "../../Assets/Images/panel6.jpg";
import panel7 from "../../Assets/Images/panel7.jpg";
import panel8 from "../../Assets/Images/panel8.jpg";
import panel9 from "../../Assets/Images/panel9.jpg";
import panel10 from "../../Assets/Images/panel10.jpg";
import evCharger from "../../Assets/Images/evcharger1.jpg";
import evCharger2 from "../../Assets/Images/evcharger2.jpg";
import evCharger3 from "../../Assets/Images/evcharger3.jpeg";

function Portfolio () {
  
  return (
    <section style={{ backgroundColor: "#37505c" }}>

      {/* <SideBar></SideBar> */}

      <Container fluid className="portfolio-section" id="portfolio" >

        {/* <Particle> */}

          <Container className="portfolio-content" >
            <Row>
              <Col md={6} className="portfolio-header">

                <h1 style={{ paddingLeft: 450, paddingTop: 10 }} className="heading">
                  <span>PORTFOLIO</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Portfoliocard
                  imgPath={mainPanel}
                  imgPathB={panel2}
                  imgPathC={panel3}
                  imgPathD={panel4}
                  imgPathE={panel5}
                  title="Electric Panels"
                  description="INSTALL | REPAIR | REPLACE | MAINTENANCE"
                />
              </Col>
              <Col>
              <Portfoliocard
                  imgPath={doubleChan}
                  imgPathB={LampPost2}
                  imgPathC={doubleChan}
                  imgPathD={LampPost2}
                  imgPathE={doubleChan}
                  title="Lighting Fixtures"
                  description="INSTALL | REPAIR | REPLACE | MAINTENANCE"
                />
              </Col>
              <Col>
              <Portfoliocard
                  imgPath={solarP}
                  imgPathB={solarP}
                  imgPathC={solarP}
                  imgPathD={solarP}
                  imgPathE={solarP}
                  title="Solar Panels"
                  description="INSTALL | REPAIR | REPLACE | MAINTENANCE"
                />
              </Col>
              <Col>
              <Portfoliocard
                  imgPath={evCharger}
                  imgPathB={evCharger2}
                  imgPathC={evCharger3}
                  imgPathD={evCharger2}
                  imgPathE={evCharger}
                  title="EV Chargers"
                  description="INSTALL | REPAIR | REPLACE | MAINTENANCE"
                />
              </Col>
              <Col>
                <Portfoliocard
                  imgPath={panel10}
                  imgPathB={panel6}
                  imgPathC={panel7}
                  imgPathD={panel8}
                  imgPathE={panel9}
                  title="Electric Panels"
                  description="INSTALL | REPAIR | REPLACE | MAINTENANCE"
                />
              </Col>
            </Row>
            
          </Container>
        {/* </Particle> */}
      </Container>
    </section>
  );
} 
export default Portfolio;
