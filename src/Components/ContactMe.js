import { Container, Row, Col, Button } from "react-bootstrap";
export const ContactMe = () => {
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
            <h3 className="color_sec py-4">Get in touch</h3>
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
            <form className="contact__form w-100">
              <Row>
                <h3>Message Me</h3>

                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
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
                    Send Messages
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
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
