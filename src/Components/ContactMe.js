export const ContactMe = () => {
  return (
    <div id="contact" className="container contact rounded-5 py-2">
      <div className="title">
        <span>Contact Me</span>
      </div>
      <div className="contact-page">
        <h2>Contact Me</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Your address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-danger">
            Send Message
          </button>
        </form>
      </div>

      <div className="row fa-3x">
        <div className="col d-flex justify-content-around pb-4">
          <a href="tel:0452382503">
            <i className="fa-solid fa-mobile"></i>
          </a>
          <a href="mailto:sumanchaudhary724@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://www.facebook.com/suman.chaudhary.359/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/sumanchaudhary724/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
