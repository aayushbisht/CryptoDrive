import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Display2 from "./components/Display2";
import Modal from "./components/Modal";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import {HashLink as Link} from "react-router-hash-link";

function App() {

  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [fileUploadCount, setFileUploadCount] = useState(0);

  const handleFileUpload = () => {
    setFileUploadCount((prevCount) => prevCount + 1);
  }

  const connectMetamask = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
      let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

      const contract = new ethers.Contract(
        contractAddress,
        Upload.abi,
        signer
      );
      setContract(contract);
      setProvider(provider);
    } catch (error) {
      console.error("Error connecting to Metamask:", error);
    }
  };

  useEffect(() => {
    document.title = "PIXELCHAIN";

    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    } else {
      console.error("Metamask is not installed");
    }
  }, []);


  

  return (
    <>

{/* {account ? (
          <>
            {`${account.slice(0, 5)}...${account.slice(-4)}`}
          </>
        ) : (
          "Not connected"
        )} */}

      <Router>
      
      <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
  
        top: 0,
        left: 0,
        width: "100%",
        padding: "10px",
        backgroundColor: "#040615",
        zIndex: 999
      }}
    >
      <Link to="#display2" className="link-button" smooth>
        Get Pixels from other account
      </Link>
      <div>
        {!modalOpen && (
          <button
            className="share"
            style={{ marginRight: "10px" }}
            onClick={() => setModalOpen(true)}
          >
            Share
          </button>
        )}
        <button
          style={{
            color: "#f7f7f7",
            background: "#621cee",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer"
          }}
          onClick={connectMetamask}
        >
          Connect
        </button>
      </div>
    </div>

         <div className="App">
          <h1 style={{ color: "#f7f7f7" }}>PIXEL<span style={{ color: "#8e5cf8" }}>CHAIN</span></h1>
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <FileUpload account={account} provider={provider} contract={contract} onFileUpload={handleFileUpload} />
          <div style={{marginBottom : '270px'}}>
          <Display contract={contract} account={account} onFileUpload={fileUploadCount} />
          </div>
          <Display2 contract={contract} account={account}/>
          <Modal contract={contract}></Modal>  
        </div>
      </Router>
    </>
  );
}

export default App;
