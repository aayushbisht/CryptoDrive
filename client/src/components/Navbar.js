import React from "react";
import { Link } from "react-router-dom";

function Navbar({ setModalOpen, connectMetamask, account }) {
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            marginRight: "10px",
          }}
        >
          PIXELCHAIN
        </div>
        <Link
          to="#display2"
          style={{
            textDecoration: "none",
            color: "#ffffff",
            fontWeight: "bold",
            marginLeft: "10px",
          }}
        >
          Get Pixels from other account
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
          Connect
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
