import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        top: 0,
        left: 0,
        width: "100%",
        padding: "10px",
        backgroundColor: "#030515",
        color: "#ffffff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
        
          PIXELCHAIN
        
    </div>
  );
}

export default Navbar;
