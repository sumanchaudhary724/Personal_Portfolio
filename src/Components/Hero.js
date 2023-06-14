import React from "react";
import { Button } from "react-bootstrap";
import CVFile from "../assets/SumanChaudhary_CV.docx";
import { Navigation } from "./Navigation";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CVFile;
    link.download = "SumanChaudhary_CV.docx";
    link.target = "_blank";
    link.click();
  };

  return (
    <>
      <div className="hero">
        <Navigation />
        <div className="container">
          <div className="container_1 py-3">
            <div className="col-md-6 mt-3 pb-3 container_1">
              <h1 className="text-1">Hi 👋 I'm</h1>
              <div className="fs-1 fw-bolder text-2">Suman Chaudhary</div>
              <div className="text-3">
                And I'm a{" "}
                <span className="typewriter-span">
                  <Typewriter
                    options={{
                      strings: ["Front-End Developer", "Web Developer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>

              <div className="hero_btn">
                <a href="#contact" className="btn btn-danger ml-2">
                  Hire Me
                </a>

                <br />
                <Button
                  variant="danger"
                  className="btn"
                  onClick={handleDownloadCV}
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
