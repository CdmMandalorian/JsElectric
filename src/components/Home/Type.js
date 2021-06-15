import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter 
      options={{
        strings: [
          "⚡Electrical Panel Upgrades",
          "⚡Lightning Installation & Upgrades",
          "⚡House Rewiring",
          "⚡Electrical Troubleshooting",
          "⚡EV Charger Installation",
          "⚡Electrical Code Corrections",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        
      }}
    />
  );
}

export default Type;
