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

  useEffect(() => {
    document.title = 'PIXELCHAIN'
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
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
      } else {
        console.error("Metamask is not installed");
      }
    };
    loadProvider();
  }, []);

  return (
    <>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}
      <span style={{ color: "#f7f7f7", position: "absolute", top: 18, right: 8 }}>
  <span className="acc">Account</span>:{" "}
  {account ? (
    <>
      {`${account.slice(0, 5)}...${account.slice(-4)}`}
    </>
  ) : (
    "Not connected"
  )}
</span>
      <Router>
      <Link to="#display2" class="link-button" smooth>
   Get Pixels from other account
</Link>

         <div className="App">
          <h1 style={{ color: "#f7f7f7" }}>PIXEL<span style={{ color: "#8e5cf8" }}>CHAIN</span></h1>
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <FileUpload account={account} provider={provider} contract={contract} />
          <div style={{marginBottom : '270px'}}>
          <Display contract={contract} account={account}/>
          </div>
          <Display2 contract={contract} account={account}/>
          <Modal contract={contract}></Modal>  
        </div>
      </Router>
    </>
  );
}

export default App;
