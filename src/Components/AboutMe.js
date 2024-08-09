import React from "react";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import profileImage from "../assets/images/profile-1.jpeg";
import "../AboutMe.css";

const skills = [
  "Proficient in technical support methodologies including Remote Desk Support, Troubleshooting, and Active Directory management.",
  "Experienced in installing, configuring, and maintaining hardware, software, and network equipment to meet client requirements.",
  "Skilled in cloud technologies such as Office 365, Microsoft Azure, AWS, and backup solutions including Windows Backup and Office365 Backup.",
  "Knowledgeable in networking protocols including DHCP, DNS, TCP/IP, as well as router and switch configurations.",
  "Familiarity with ticketing systems such as OS Ticketing, Zendesk, Freshdesk, and ServiceNow.",
];

export const AboutMe = () => {
  return (
    <section id="about-me" className="container mt-5 py-5 about-me-section">
      <div className="title text-center mb-4">
        <h2>About Me</h2>
        <div className="title-underline"></div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-5 mb-5 text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image img-fluid rounded-circle shadow"
          />
        </div>
        <div className="col-md-7">
          <h3 className="mb-3">Hello, I'm Suman.</h3>
          <p>
            With over 2 years of dedicated experience as an IT Support
            Specialist, I am committed to delivering outstanding technical
            support and ensuring seamless technology experiences for end-users.
            My passion for resolving complex technical challenges, coupled with
            effective communication skills, enables me to provide exceptional IT
            support services. I thrive in dynamic environments where I can
            leverage my technical expertise and meticulous problem-solving
            approach to enhance end-users' productivity and satisfaction.
          </p>
          <p>
            I completed my Bachelor of Information Technology at Victoria
            University and further enhanced my skills through the ACS
            Professional Year Program. Alongside my technical abilities, I
            possess excellent customer service skills, strong communication
            capabilities, and effective problem-solving techniques. I am adept
            at working both independently and collaboratively to achieve
            organizational goals.
          </p>
          <p>Some key skills I possess include:</p>
          <ul className="skill-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <p>
            I am dedicated to continuously expanding my expertise in the latest
            technologies and industry best practices to drive innovation and
            efficiency in IT operations. If you are seeking a skilled and
            customer-focused IT Support Engineer, I would welcome the
            opportunity to discuss how my experience and qualifications align
            with your organization's needs.
          </p>
          <div className="contact-info mt-4">
            <a
              href="mailto:sumanchaudhary724@gmail.com"
              className="btn btn-primary me-3"
            >
              <MdEmail className="me-2" /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/sumanchaudhary724/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              <BsLinkedin className="me-2" /> LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
