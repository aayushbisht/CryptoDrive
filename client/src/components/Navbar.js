import React from "react";
import { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import WebFont from 'webfontloader';
import './navbar.css';

import 'google-fonts'; // Import the google-fonts package

function Navbar({ setModalOpen, connectMetamask, account }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
      useEffect(() => {
        WebFont.load({
          google: {
            families: ['Aclonica'],
          },
        });
      }, []);
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
        backgroundColor: "#322f63",
        color: "#ffffff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        position:"fixed",
        height:"60px"
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            marginRight: "20px",
            fontFamily: "Aclonica, sans-serif",
            marginTop:"-2px"
          }}
        >
         <span style={{fontSize:"32px",color:"#621cee"}}> C</span>RYPTO<span style={{fontSize:"30px",color:"#621cee"}}>D</span>RIVE .
        </div>
        <Link smooth
        onClick={scrollToTop}
          style={{
            textDecoration: "none",
            color: "#ffffff",
            marginLeft: "10px",
            fontFamily: "Dancing Script",
            fontSize:"18px",
            marginTop:"2px",
            position:"relative"

          }}
          className="nav-link"
        >
          Upload
        </Link>
        <Link smooth
          to="#retreive"
          style={{
            textDecoration: "none",
            color: "#ffffff",
            marginLeft: "20px",
            fontFamily: "Dancing Script",
            fontSize:"18px",
            marginTop:"2px",
            position:"relative"


          }}
          className="nav-link"
        >
          Retreive
        </Link>
        <Link smooth
          to="#display2"
          style={{
            textDecoration: "none",
            color: "#ffffff",
            marginLeft: "20px",
            fontFamily: "Dancing Script",
            fontSize:"18px",
            marginTop:"2px",

          }}
          className="nav-link"
        >
          Get Files from other account
        </Link>
      </div>
      <div>
        <button
          className="share"
          onClick={() => setModalOpen(true)}
          style={{
            color: "#ffffff",
            background: "#8e5cf8",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            marginRight: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Share
        </button>
        <button
          style={{
            color: "#ffffff",
            background: "#8e5cf8",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            marginRight: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={connectMetamask}
        >
          CONNECT
        </button>
        {account ? (
          <span
            style={{
              marginLeft: "10px",
              fontWeight: "bold",
            }}
          >
            {`${account.slice(0, 5)}...${account.slice(-4)}`}
          </span>
        ) : (
          <span
            style={{
              marginLeft: "10px",
              fontWeight: "bold",
            }}
          >
            Not connected
          </span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
