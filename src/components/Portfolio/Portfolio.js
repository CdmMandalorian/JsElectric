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
import LightingFix1 from "../../Assets/Images/LightingFix1.jpg"
import LightingFix2 from "../../Assets/Images/LightingFix2.jpg"
import LightingFix3 from "../../Assets/Images/LightingFix3.jpg"
import solarP from "../../Assets/Images/solarp.jpg"
import solarP1 from "../../Assets/Images/solarp1.jpg"
import solarP2 from "../../Assets/Images/solarp2.jpg"
import solarP3 from "../../Assets/Images/solarp3.jpg"
import solarP4 from "../../Assets/Images/solarp4.jpg"
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
import evCharger3 from "../../Assets/Images/evcharger3.jpg";
import evCharger4 from "../../Assets/Images/evcharger4.jpg";
import evCharger5 from "../../Assets/Images/evcharger5.jpg";

function Portfolio () {
  
  return (
    <section style={{ backgroundColor: "#37505c" }}>

      {/* <SideBar></SideBar> */}

      <Container fluid className="portfolio-section" id="portfolio" >

        {/* <Particle> */}

          <Container className="portfolio-content" >
            <Row>
              <Col md={6} className="portfolio-header">

                <h1 style={{ paddingLeft: 450, paddingTop: 10,  }} className="heading">
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
                  imgPathC={LightingFix1}
                  imgPathD={LightingFix2}
                  imgPathE={LightingFix3}
                  title="Lighting Fixtures"
                  description="INSTALL | REPAIR | REPLACE | MAINTENANCE"
                />
              </Col>
              <Col>
              <Portfoliocard
                  imgPath={solarP}
                  imgPathB={solarP1}
                  imgPathC={solarP2}
                  imgPathD={solarP3}
                  imgPathE={solarP4}
                  title="Solar Panels"
                  description="INSTALL | REPAIR | REPLACE | MAINTENANCE"
                />
              </Col>
              <Col>
              <Portfoliocard
                  imgPath={evCharger}
                  imgPathB={evCharger2}
                  imgPathC={evCharger5}
                  imgPathD={evCharger3}
                  imgPathE={evCharger4}
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
