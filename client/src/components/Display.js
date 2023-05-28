import { useState, useEffect } from "react";
import "./Display.css";
import pdf from '../assets/pdf.png';
import music from '../assets/music.png';
import video from '../assets/video.png';
import word from '../assets/word.png';



const Display = ({ contract, account, onFileUpload }) => {
  const [data, setData] = useState("");

  const getData = async () => {
    let dataArray;
    try {
      dataArray = await contract.display(account);
    } catch (e) {
      alert("Metamask not connected");
      return;
    }

    const isEmpty = dataArray.length === 0;

    if (!isEmpty) {
      const images = dataArray.map((item, i) => {
        const hash = item.url;
        const fileType = item.fileType;
        const fileName = item.fileName;
        const downloadFile = () => {
          window.open(hash, "_blank");
        };
      
        const isImage = ["jpg", "jpeg", "png","svg"].includes(fileType.toLowerCase());
        const type = fileType.toLowerCase();

        if (isImage) {
          return (
            <div className="file-container" key={i}>
              <a href={hash} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://gateway.pinata.cloud/ipfs/${hash.substring(34)}`}
                  alt="Image not found"
                  className="image-list"
                />
              </a>
              <div className="file-name">{fileName}</div>
              <button className="download-button" onClick={downloadFile}>
                Download File
              </button>
            </div>
          );
        } else if(type==="docx") {
          // Handle non-image file
          // const downloadFile = () => {
          //   window.open(hash, "_blank");
          // };

          return (
            <div className="file-container" key={i}>
              <a href={hash} target="_blank" rel="noopener noreferrer">
                <img
                  src={word}
                  alt="Document Icon"
                  className="document-icon"
                />
              </a>
              <div className="file-name">{fileName}</div>
              <button className="download-button" onClick={downloadFile}>
                Download File
              </button>
            </div>
          );
        }
        else if(type==="pdf") {
          // Handle non-image file
          const downloadFile = () => {
            window.open(hash, "_blank");
          };

          return (
            <div className="file-container" key={i}>
              <a href={hash} target="_blank" rel="noopener noreferrer">
                <img
                  src={pdf}
                  alt="Pdf Icon"
                  className="document-icon"
                />
              </a>
              <div className="file-name">{fileName}</div>
              <button className="download-button" onClick={downloadFile}>
                Download File
              </button>
            </div>
          );
        }
        else if(type==="mp3") {
          // Handle non-image file
          const downloadFile = () => {
            window.open(hash, "_blank");
          };

          return (
            <div className="file-container" key={i}>
              <a href={hash} target="_blank" rel="noopener noreferrer">
                <img
                  src={music}
                  alt="Music Icon"
                  className="document-icon"
                />
              </a>
              <div className="file-name">{fileName}</div>
              <button className="download-button" onClick={downloadFile}>
                Download File
              </button>
            </div>
          );
        }
        else if(type==="mp4") {
          // Handle non-image file
          const downloadFile = () => {
            window.open(hash, "_blank");
          };

          return (
            <div className="file-container" key={i}>
              <a href={hash} target="_blank" rel="noopener noreferrer">
                <img
                  src={video}
                  alt="Document Icon"
                  className="document-icon"
                />
              </a>
              <div className="file-name">{fileName}</div>
              <button className="download-button" onClick={downloadFile}>
                Download File
              </button>
            </div>
          );
        }
      });
      setData(images);
    } else {
      alert("No Fileto display");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      getData();
    }, 30000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onFileUpload]);

  return (
    <section id="display">
      <div className="image-list">{data}</div>
      <button className="center button" onClick={getData}>
        Get Files
      </button>
    </section>
  );
};

export default Display;
