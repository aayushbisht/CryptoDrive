import { useState,useEffect } from "react";
import "./Display.css";
const Display = ({ contract, account,onFileUpload }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    try {
        dataArray = await contract.display(account);
        console.log(dataArray);
    } catch (e) {
      alert("Metamask not connected");
    }
    // console.log(account);
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(34)}`}
              alt="not found image"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      getdata();
    }, 30000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onFileUpload]);
  return (
    <section id="display">
      <div className="image-list">{data}</div>
      <button className="center button" onClick={getdata}>
        Get Pixels
      </button>
    </section>
  );
};
export default Display;