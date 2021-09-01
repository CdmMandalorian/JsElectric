import React, { useState }  from 'react';
import {Container, Row, Col,  } from "react-bootstrap";
// import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Servicescard from "./ServicesCard"
import Bolt from "../../Assets/Images/bolt-solid.svg"
import ChargingStation from "../../Assets/Images/charging-station-solid.svg"
import SolarPanel from "../../Assets/Images/solar-panel-solid.svg"
import ProjectDiagram from "../../Assets/Images/project-diagram-solid.svg"
import Lightbulb from "../../Assets/Images/lightbulb-regular.svg"
import Columns from "../../Assets/Images/columns-solid.svg"
import GripHorizontal from "../../Assets/Images/grip-horizontal-solid.svg"
import Wrench from "../../Assets/Images/wrench-solid.svg"
import ThList from "../../Assets/Images/th-list-solid.svg"
import servicesImg from "../../Assets/Images/ps-LightFixture1.png"
// import SideBar from "../Sidebar/Sidebar";

function Services (props) {
  
  
  return (
    <section style={{backgroundColor: "#37505c"}}>
      
      {/* <SideBar></SideBar> */}

      <Container fluid className="services-section" id="services">

        {/* <Particle> */}

        <Container className="services-content" >
          <Row>
            <Col md={6} className="services-header">
              <img src={servicesImg} alt="services pic" className="img-fluid" style={{paddingLeft: "380px", position: "sticky", marginLeft: "5px", maxWidth:"150%", mixBlendMode: "hard-light", marginTop: "-80px" }}/>
              <h1 style={{ paddingLeft: 450 }} className="heading">
                <span>SERVICES</span>
                
              </h1>
              
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="service-card" id="1stServ">
            <Servicescard className="shortServiceCard"
                title="Main Electrical Panel Grounding System"
                description="The National Electrical Code (NEC) has evolved for safety in regards to electrical panel grounding systems. An electrical panel proper grounding system consists of a conductor wire from the grounding bar located in the electrical panel unbroken to the cold water pipe ending at an 8'ft ground rod driven into the earth."
                imgPath={ProjectDiagram}
                >
                   
              </Servicescard>
               
            </Col>
            <Col md={4} className="service-card" id="2ndServ">
            <Servicescard className="shortServiceCard"
                title="EV Charger Installation"
                description="If you've just purchased or are planning to purchase an Electrical Vehicle, your first thoughts will be where to install the charging station and can your current electrical plan sustain such a heavy load. Within J's Electric, I wil make sure your Electrical Vehicle charging outlet is properly installed by adding a new dedicated circuit. Call Today, for next day installation."
                imgPath={ChargingStation}
              >
                 
              </Servicescard>
            </Col>
            <Col md={4} className="service-card" id="3rdServ">
            <Servicescard className="shortServiceCard"
                title="Solar Panels"
                description="Progressing into a Green World of renewable energy, looking into getting solar panels for your home. Call me, today and lets figure out how we can reduce your carbon footprint and upgrade your home into the new age."
                imgPath={SolarPanel}
              >
                
              </Servicescard>   
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="service-card" id="4thServ">
            <Servicescard className="LongServiceCard"
                  title="House Rewiring"
                  description="With today's higher energy consumption, it is imperative your home's wiring is up to date. Not only does proper wiring ensure the smooth functioning of a home's electrical supply to connected appliances; it also protects the house from any kind of electrical hazard. Contact us Today, to find out if your house requires new House Rewiring."
                  imgPath={Bolt}
              >
                 
              </Servicescard>
            </Col>
            <Col md={4} className="service-card" id="5thServ">
            <Servicescard className="LongServiceCard"
                title="Electrical Panel Upgrades"
                description="Household electrical appliances and gadgets have exponentially grown in the modern times. Functionality and comfort depend on the use of electricity. Operating while damaged can lead to a compromise to household safety. Call for an inspection."
                imgPath={Columns}
              >
                
              </Servicescard> 
            </Col>
            <Col md={4} className="service-card" id="6thServ">
            <Servicescard className="LongServiceCard"
                title="Electrical Subpanels"
                description="Instalation of Sub panels, some home's require an installation of sub panels for either additional circuits located afar from the main meter panel. Sub panels are typically rated between 60 amps  to 125 amps depending on the current usage required.  Additional circuits for car chargers and other appliances would be branced off of this sub panel for these type of installations. "
                imgPath={GripHorizontal}
              >
              
            </Servicescard> 
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="service-card" id="7thServ">
            <Servicescard className="shortServiceCard"
                title="Lighting Installation and Upgrades"
                description="I install all kinds of new lighting fixtures from haging lights, recessed lighting, swimming pool lights, accent lighting, and more. I will remove your old lighting fixtures and do a thorough inspection to ensure tht the wiring is up to code before installing your new fixtures.  With new electricity fixtures, code compliance and safety is priority."
                imgPath={Lightbulb}
              >
              
            </Servicescard> 
            </Col>
            <Col md={4} className="service-card" id="8thServ">
            <Servicescard className="shortServiceCard"
                title="Electrical Troubleshooting"
                description="Troubles?? Whichever electrical problem you are facing, I'll get to the root of it and solve it for you. I troubleshoot any electical problems ranging from dimming lighting, circuit breakers tripping, to power going on and off without any explanations.  Contact me with your electrical troubleshooting issues today, and I will pinpoint the problem get it fixed with a customer satisfaction guarantee. "
                imgPath={Wrench}
              >
              
            </Servicescard> 
            </Col>
            <Col md={4} className="service-card" id="9thServ">
            <Servicescard className="shortServiceCard"
                title="Electrical Code Corrections"
                description="If you're having your home remodeled and have received a 'Notice To Comply' by the department of housing for your property, I can assist and help solve your electrical problems. I will personally work with your inspector and general contractor to bring your electrical requirement up to date, and pass your next electrical inspection."
                imgPath={ThList}
              >
              
              </Servicescard> 
            </Col>
            <Col md={5} style={{ paddingBottom: 80, paddingTop: 10, }}>
              
            </Col>
          </Row>
        </Container>
      {/* </Particle> */}  
      </Container>
    </section>
  );
} 
export default Services;
