import React from "react";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import profileImage from "../assets/images/profile-1.jpg";

export const AboutMe = () => {
  return (
    <section id="about-me" className="container mt-3 py-5">
      <div className="title">
        <span>About Me</span>
      </div>
      <div className="row">
        <div className="col-md-5 mb-5">
          <img
            src={profileImage}
            alt="Profile"
            height="400px"
            className="profile-image"
          />
        </div>
        <div className="col-md-7">
          <h3>Hello, I'm Suman.</h3>
          <p>
            I am a creative and highly reliable IT graduate from Victoria
            University, seeking an IT-related position with a focus on web and
            mobile applications. With a strong passion for problem-solving and
            coding, I strive to create exceptional websites based on clients'
            technical and design specifications.
          </p>
          <p>
            During my time at Victoria University, I developed solid time
            management and collaboration skills. I understand the importance of
            working as part of a team, learning from others, and continuously
            developing as a professional. My goal is to contribute to innovative
            projects and deliver high-quality solutions.
          </p>
          <p>Some key skills I possess include:</p>
          <ul>
            <li>Proficiency in web and mobile application development</li>
            <li>Strong problem-solving abilities</li>
            <li>Excellent time management skills</li>
            <li>Effective collaboration and teamwork</li>
          </ul>
          <p>
            I take pride in my work and always strive for excellence. Please
            feel free to reach out to me through the contact information below
            to discuss potential opportunities or to learn more about my
            experience.
          </p>
          <div className="contact-info">
            <p>
              <a
                href={`mailto:sumanchaudhary724@gmail.com`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MdEmail /> sumanchaudhary724@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/sumanchaudhary724/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <BsLinkedin /> https://www.linkedin.com/in/sumanchaudhary724/
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
