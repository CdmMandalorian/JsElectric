import React from "react";
import logo from "../../Assets/Images/J'sLLogo.png";

function Header () {
    return (
        <header style={headerStyle}
        >
          <img src={logo} className="img-fluid logo" alt="brand" 
          />
            <h2 style={{display: "flex", justifyContent: "flex-end",}}>714-472-3801</h2>
            <h1 style={{display: "flex", justifyContent: "center", paddingRight: "240px"}}>J's ELECTRIC</h1>
            <p  style={ subStyle }>Eminent Precise Electrical Engineering</p>
            
          
        </header>
    )
}

const headerStyle ={
    background: "#df8412",
    //borderBottom: '#092532',
    color: "#a8271e",
    textAlign: "center",
    padding: "10px",
    borderBottom: "10px solid #a8271e",
}

const subStyle ={
    color: "#ece8ef",
    display: "flex",
    justifyContent: "center",
}

export default Header;