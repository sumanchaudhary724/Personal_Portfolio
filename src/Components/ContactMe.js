import { Layout } from "./Layout";

export const ContactMe = () => {
  return (
    <Layout>
      <div id="contact" className="container contact rounded-5 py-2">
        <div className="title">
          <span>Contact Me</span>
        </div>
        <div className="row fa-3x">
          <div className="col d-flex justify-content-around pb-4">
            <a href="tel:0409876789">
              <i className="fa-solid fa-mobile"></i>
            </a>
            <a href="mailto:yor@email.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="">
              {" "}
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              {" "}
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
