import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Welcome Everyone, I am <span className="green">  Jesse Salazar  </span>
                    
            <br></br>
            <span className="green"> Riverside, California  </span>
            <br />Electrical and Solar Expert
            <br />
            <br />
             
          </p>
          <ul>
            <li className="about-activity">
            <i class="fas fa-meteor"></i> New Instalations, Repair, and Upgrades on.. 
            </li>
            <li className="about-activity">
            <i class="fas fa-meteor"></i> Outlets, Fans, Lighting, Fixtures, House Rewiring
            </li>
            <li className="about-activity">
            <i class="fas fa-meteor"></i> Electrical Panels, Sub Panels,GPCI Panel
            </li>
            <li className="about-activity">
            <i class="fas fa-meteor"></i> EV Charger Installation, Electrical Code Corrections
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(20 123 65)" }}>
            "Eminent Precise Electrical Engineering"{" "}
          </p>
          <footer className="blockquote-footer">CAll TODAY</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
