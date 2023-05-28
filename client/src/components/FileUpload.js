import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";

const FileUpload = ({ contract, account, provider, onFileUpload }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  const [fileType, setFileType] = useState(""); // New state for file type

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `18edc4d3e6b890c3f6fb`,
            pinata_secret_api_key: `e2e3d087ea3e676f298bf36c040031d01176e2dac76269eb4c274b1a73b8c26a`,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;

        contract.add(account, ImgHash, fileName, fileType); // Update contract function call with file name and file type

        alert("File Uploaded Successfully");
        setFileName("No file selected");
        setFile(null);
        setFileType(""); // Reset file type
        onFileUpload();
      } catch (e) {
        alert("Unable to upload file to Pinata");
      }
    }

    alert("File Uploaded Successfully");
    setFileName("No File selected");
    setFile(null);
    setFileType(""); // Reset file type
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);

    // Extract file type from the file name
    const fileExtension = e.target.files[0].name.split(".").pop().toLowerCase();
    setFileType(fileExtension);

    e.preventDefault();
    console.log("hello");
    console.log(data);
  };

  return (
    <div className="top">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="choose">
          Choose File
        </label>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className="textArea">File: {fileName}</span>
        <button type="submit" className="upload" disabled={!file}>
          Upload File
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
