import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Display2 from "./components/Display2";
import Modal from "./components/Modal";
import animationData from './Animation/upload.json';
import animationData1 from './Animation/retreive.json';
import Typist from "react-typist";

import Lottie from 'react-lottie';

import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [fileUploadCount, setFileUploadCount] = useState(0);

  const handleFileUpload = () => {
    setFileUploadCount((prevCount) => prevCount + 1);
  };

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
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}
      <Router>
        <Navbar setModalOpen={setModalOpen} connectMetamask={connectMetamask} account={account} />
{/* <h1 style={{ color: "#f7f7f7" }}>
            CRYPTO<span style={{ color: "#8e
            5cf8" }}>DRIVE</span>
          </h1> */}
         <div className="App">
         <section id="upload">

          <h1 className="upload-heading" style={{marginTop :"180px",fontSize:"50px"}}>
            
            Upload your files here!</h1>
          {/* <div className="file-upload-section" style={{marginTop:"40px"}} >
  <FileUpload
    account={account}
    provider={provider}
    contract={contract}
    onFileUpload={handleFileUpload}
  />
  
</div>  */}
<div className="container">
  
  <div className="section1">
  <FileUpload
    account={account}
    provider={provider}
    contract={contract}
    onFileUpload={handleFileUpload}
  />
  </div>
  <div className="section2">
  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: animationData,
    }}
    height={250} // Adjust the height as needed
    width={250} // Adjust the width as needed
  />
  </div>
</div>
</section>


          <section id="retreive" style={{marginTop:"400px"}}>
          <div style={{ marginBottom: "270px", marginTop:"20px" }}>
          <h3 className="upload-heading" style={{marginTop :"150px",fontSize:"50px"}}>Retreive your files here!</h3>
          <Lottie style={{marginTop:"-75px"}}
    options={{
      loop: true,
      autoplay: true,
      animationData: animationData1,
    }}
    height={250} // Adjust the height as needed
    width={250} // Adjust the width as needed
  />
            <Display
              contract={contract}
              account={account}
              onFileUpload={fileUploadCount }
            />
          </div>
          </section>
          <section id="display2">
          <Display2 contract={contract} account={account} onFileUpload={fileUploadCount} />
          </section>
          <Modal contract={contract}></Modal>
        </div>
      </Router>
    </>
  );
}

export default App;
