import React from "react";
import NavbarMain from "./NavbarMain";
import { Link } from "react-router-dom";
import Typist from "react-typist";

function LandingPage({ renderApp }) {
  const handleStart = () => {
    // Call the renderApp function to navigate to the main App component
    renderApp();
  };
  const backgroundImageStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    minHeight: "100vh",
    zIndex: 20,
  };
  const logoStyle = {
    height: "90px",
    width: "auto",
    // background: `url(${Logo}) no-repeat`,
    backgroundSize: "contain",
    top: "0%",
    left: "50%",
    zIndex: "1",
    marginLeft: "25px",
  };
  return (
    <div>
      <NavbarMain />

      {/*new*/}
      <div style={backgroundImageStyle}>
        {/* <div style={logoStyle}></div> */}
        <section className="text-gray-600 body-font relative">
          <div >
            <div >
              <div >
                <h3
                  className="my-custom-class"
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "white",
                    fontWeight: 900,
                  }}
                >
                  {" "}
                  Revolutionizing{" "}
                  <span style={{ color: "#60F", fontWeight: 900 }}>
                    Crowdfunding
                  </span>{" "}
                  with{" "}
                  <span style={{ color: "#60F", fontWeight: 900 }}>
                    Blockchain
                  </span>{" "}
                  !
                </h3>
                <h1
                  className="lg:w-2/3 text-3xl  font-bold leading-relaxed text-white"
                  style={{
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    textShadow: "2px 2px #000",
                  }}
                >
                  Say Goodbye to Intermediaries
                </h1>
                <h1
                  className="lg:w-2/3 text-3xl  font-bold leading-relaxed text-white"
                  style={{
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    textShadow: "2px 2px #000",
                  }}
                >
                  <Typist avgTypingDelay={80} cursor={{ hideWhenDone: true }}>
                    And Hello to{" "}
                    <span
                      style={{
                        color: "#60F",
                        fontWeight: 900,
                        fontSize: "35px",
                      }}
                    >
                      KryptoRaise!
                    </span>
                    <Typist.Backspace count={12} delay={1000} />
                    <span
                      style={{
                        color: "#60F",
                        fontWeight: 900,
                        fontSize: "35px",
                      }}
                    >
                      KryptoRaise!
                    </span>
                  </Typist>
                </h1>

                <div className="flex mt-8">
                  <button
                    className=" bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"
                    onClick={handleStart}
                  >
                    Get Started!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <section id="section07" class="demo">
            <a>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </section>
        </section>
      </div>
      <div className="mt-[-30px] bg-[#000000]" style={{ zIndex: 10 }}>
        <div
          className="container"
          style={{ width: "90%", margin: " 0 auto", borderRadius: "50px" }}
        ></div>
      </div>
    </div>
  );
}

export default LandingPage;
