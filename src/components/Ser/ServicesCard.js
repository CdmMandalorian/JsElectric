import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse"
import useId from "react-id-generator";
import Button from "react-bootstrap/Button"
import Accordion from "react-bootstrap/Accordion"
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";



function ServicesCard(props) {
  const [open, setOpen] = useState(true);
  const [idList]= useId();
  return (

    <Card className="project-card-view" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Accordion  id={idList} defaultActiveKey="0">
          <Card >
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                View More!
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{props.descriptionB}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

      </Card.Body>
      
    </Card>
  );
}
export default ServicesCard;
