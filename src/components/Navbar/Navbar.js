import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import  "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar style={{ position: "absolute", fontWeight: "600", fontSize: "1.2rem"}} 
    expanded={expand}
    fixed="top"
    expand="md"
    className={navColour ? "absolute" : "navbar"}
    >
        <Container  style={{ justifyContent: "end", paddingTop: "121px", marginRight: "-10px" }} >
            <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="ml-auto" defaultActiveKey="#home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/J's-Electric/" onClick={() => updateExpanded(false)} style={{color: "#ece8ef"}}>
                            <i className="fas fa-home"></i> Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/J's-Electric/portfolio"
                            onClick={() => updateExpanded(false)}
                            style={{color: "#ece8ef"}}
                        >
                            <i className="far fa-user"></i> Portfolio
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/J's-Electric/services"
                            onClick={() => updateExpanded(false)}
                            style={{color: "#ece8ef"}}
                        >
                            <i className="far fa-user"></i> Services
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/J's-Electric/areasServed"
                            onClick={() => updateExpanded(false)}
                            style={{color: "#ece8ef"}}
                        >
                            <i className="far fa-user"></i> Areas Served
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/J's-Electric/about"
                            onClick={() => updateExpanded(false)}
                            style={{color: "#ece8ef"}}
                        >
                            <i className="far fa-user"></i> About
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/J's-Electric/contact"
                            onClick={() => updateExpanded(false)}
                            style={{color: "#ece8ef"}}
                        >
                            <i className="far fa-user"></i> Contact
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
        </Container>
     </Navbar>
  );
}

export default NavBar;
