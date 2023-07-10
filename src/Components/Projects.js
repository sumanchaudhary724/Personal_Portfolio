import React from "react";
import slide_image_1 from "../assets/images/Calculator.jpg";
import slide_image_2 from "../assets/images/NotTODO.jpg";
import slide_image_3 from "../assets/images/ContactListIcon.jpg";
import slide_image_4 from "../assets/images/parallax";

const ProjectCard = ({
  image,
  title,
  description,
  githubLink,
  projectLink,
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <i
                className="fa-brands fa-square-github fa-lg"
                style={{ marginRight: "8px" }}
              ></i>
            </a>
          )}
          {projectLink && (
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <i
                className="fa-brands fa-chrome fa-lg"
                style={{ marginLeft: "8px" }}
              ></i>
            </a>
          )}
        </div>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

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
              title="Calculator"
              description="Coding Calculator using react"
              githubLink="https://github.com/sumanchaudhary724/React_Calculator"
              projectLink="https://react-calculator-zeta-peach.vercel.app/"
            />

            <ProjectCard
              image={slide_image_2}
              title="Not TODO Task"
              description="Task management using react and redux"
              githubLink="https://github.com/sumanchaudhary724/NotTODO_API"
              projectLink="https://fierce-fish-earmuffs.cyclic.app/"
            />

            <ProjectCard
              image={slide_image_3}
              title="Contact List"
              description="Contact list using Fetch API"
              githubLink="https://github.com/sumanchaudhary724/ContactList"
              projectLink="https://contact-list-bice.vercel.app/"
            />
            <ProjectCard
              image={slide_image_4}
              title="Parallax Demo"
              description="Sample Page using parallax"
              githubLink="https://github.com/sumanchaudhary724/Parallax-Web"
              projectLink="https://parallax-web.vercel.app/"
            />
            <ProjectCard
              image={slide_image_3}
              title="Project 4"
              description="Description of Project 3"
              githubLink="https://github.com/your-github-repo-url"
              projectLink="https://example.com/project-3"
            />
            <ProjectCard
              image={slide_image_3}
              title="Project 4"
              description="Description of Project 3"
              githubLink="https://github.com/your-github-repo-url"
              projectLink="https://example.com/project-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};
