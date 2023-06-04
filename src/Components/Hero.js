import { Layout } from "./Layout";

export const Hero = () => {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <div className="row mt-5 py-3">
            <div className="col-md-6 text-center order-md-2">
              <img src="assets/my.png" width="80%" alt="" />
            </div>
            <div className="col-md-6 mt-3 pb-3">
              hi 👋 i'm
              <div className="fs-1 fw-bolder mb-5">Suman Chaudhary</div>
              <p>
                I love codiong and solving problems with code and teaching to
                other what i know that makes me feel happy
              </p>
              <button className="btn btn-danger">Download Resume</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
