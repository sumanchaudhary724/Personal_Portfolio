import { Container, Row, Col, Button } from "react-bootstrap";
import { IoIosSend } from "react-icons/io";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactMe = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6rkbs1p",
        "template_phf1ej4",
        form.current,
        "vwIyB3AEkRhXEwcYe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true); // Update state to indicate successful form submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="container contact rounded-5 py-2">
      <div className="title">
        <span>Contact Me</span>
      </div>
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get In Touch</h3>
            <p>
              <strong>Name:</strong> Suman Chaudhary
            </p>
            <p>
              <strong>Address:</strong> Sydney, Australia NSW 2222
            </p>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:sumanchaudhary724@gmail.com`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              sumanchaudhary724@gmail.com
            </a>
            <br />
            <br />
            <p>
              <strong>Phone:</strong> 0452382503
            </p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact__form w-100"
            >
              <Row>
                <h3>Message Me</h3>

                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="user_name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="user_email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <Button variant="danger" className="btn" type="submit">
                    <IoIosSend /> Send Message
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        {submitted && ( // Render "Thank You" message when form is submitted successfully
          <div className="row">
            <div className="col-lg-7 offset-lg-5 text-center">
              <h3>Thank You for Submitting!</h3>
              <p>Your message has been sent successfully.</p>
            </div>
          </div>
        )}
      </Container>

      <div className="row fa-3x">
        <div className="col pb-4">
          <div className="icon-container">
            <a href="tel:0452382503">
              <i className="fas fa-mobile-alt"></i>
            </a>
            <a href="mailto:sumanchaudhary724@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.facebook.com/suman.chaudhary.359/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/sumanchaudhary724/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
