import React from "react";
import slide_image_1 from "../assets/images/profile-1.jpg";
import slide_image_2 from "../assets/images/profile-2.jpeg";
import slide_image_3 from "../assets/images/profile-3.jpeg";
function ProjectCard({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div>
          <a
            href="https://github.com/sumanchaudhary724/NotTODO_API"
            target="_blank"
          >
            <i
              className="fa-brands fa-square-github fa-lg"
              style={{ marginRight: "8px" }}
            ></i>
          </a>
          <a href="https://fierce-fish-earmuffs.cyclic.app/" target="_blank">
            <i
              className="fa-brands fa-chrome fa-lg"
              style={{ marginLeft: "8px" }}
            ></i>
          </a>
        </div>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export const Projects = () => {
  return (
    <>
      <div id="projects" className="projects py-5">
        <div className="container">
          <div className="title">
            <span>Projects</span>
          </div>

          <div className="d-flex flex-wrap justify-content-center">
            <ProjectCard
              image={slide_image_1}
              title="Project 1"
              description="Description of Project 1"
            />

            <ProjectCard
              image={slide_image_2}
              title="Project 2"
              description="Description of Project 2"
            />

            <ProjectCard
              image={slide_image_3}
              title="Project 3"
              description="Description of Project 3"
            />
          </div>
        </div>
      </div>
    </>
  );
};
