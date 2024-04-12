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
          <ul>
            <li>
              Proficient in technical support methodologies including Remote
              Desk Support, Troubleshooting, and Active Directory management.
            </li>
            <li>
              Experienced in installing, configuring, and maintaining hardware,
              software, and network equipment to meet client requirements.
            </li>
            <li>
              Skilled in cloud technologies such as Office 365, Microsoft Azure,
              AWS, and backup solutions including Windows Backup and Office365
              Backup.
            </li>
            <li>
              Knowledgeable in networking protocols including DHCP, DNS, TCP/IP,
              as well as router and switch configurations.
            </li>
            <li>
              Familiarity with ticketing systems such as OS Ticketing, Zendesk,
              Freshdesk, and ServiceNow.
            </li>
          </ul>

          <p>
            I am dedicated to continuously expanding my expertise in the latest
            technologies and industry best practices to drive innovation and
            efficiency in IT operations. If you are seeking a skilled and
            customer-focused IT Support Engineer, I would welcome the
            opportunity to discuss how my experience and qualifications align
            with your organization's needs.
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
