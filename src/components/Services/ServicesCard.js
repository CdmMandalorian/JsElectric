import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";



function ServicesCard(props) {
  
  return (

    <Card className="project-card-view" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        

      </Card.Body>
      
    </Card>
  );
}
export default ServicesCard;
