import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PortfolioCard(props) {
  return (
    <Carousel style={{paddingBottom: 110}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.imgPath}
      alt="1st Slide"
      
    />
    <Carousel.Caption>
      <h3>{props.title}</h3>
      <p className="portfolioCaption">{props.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.imgPathB}
      alt="2nd slide"
    />

    <Carousel.Caption>
      <h3>{props.title}</h3>
      <p className="portfolioCaption">{props.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.imgPathC}
      alt="3rd slide"
    />

    <Carousel.Caption>
      <h3>{props.title}</h3>
      <p className="portfolioCaption">{props.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.imgPathD}
      alt="4th slide"
    />

    <Carousel.Caption>
      <h3>{props.title}</h3>
      <p className="portfolioCaption">{props.description}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.imgPathE}
      alt="5th slide"
    />

    <Carousel.Caption>
      <h3>{props.title}</h3>
      <p className="portfolioCaption">{props.description}</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
    
  );
}
export default PortfolioCard;
