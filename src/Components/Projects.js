import React from "react";
import slide_image_1 from "../assets/images/Calculator.jpg";
import slide_image_2 from "../assets/images/NotTODO.jpg";
import slide_image_3 from "../assets/images/ContactListIcon.jpg";
import slide_image_4 from "../assets/images/parallax.jpg";
import slide_image_5 from "../assets/images/library.jpg";
import slide_image_6 from "../assets/images/mern_estate.jpg";

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
              image={slide_image_5}
              title="Library Management"
              description="Library Management System using react for Front-end and Mongo for backend"
              githubLink="https://github.com/sumanchaudhary724/Library_Management_Client"
              projectLink="https://library-management-client-two.vercel.app/"
            />
            <ProjectCard
              image={slide_image_6}
              title="MERN Estate"
              description="Marketplace for Estate. Customers can able to post house or apartments and able to see others post for sale and renting houses with offers"
              githubLink="https://github.com/sumanchaudhary724/mern-estate"
              projectLink="https://mern-estate-wh84.onrender.com/"
            />
          </div>
        </div>
      </div>
    </>
  );
};
