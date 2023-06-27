import React from "react";

export const Education = () => {
  return (
    <section className="Education_Section" id="education">
      <h2 className="title">
        <span>Education Qualification</span>
      </h2>
      <div className="container" align="center">
        <div className="row ">
          <div className="col-sm-12 col-md-4">
            <div className="card">
              <i className="fas fa-graduation-cap"></i>
              <h3 className="text">The ACS PY Program</h3>
              <p>
                Queensland International Business Academy (QIBA), Sydney NSW
              </p>
              <p>Jan 2022 - Present</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card">
              <i className="fas fa-user-graduate"></i>
              <h3 className="text">Bachelor of Information Technology</h3>
              <p>Victoria University, Sydney NSW</p>
              <p>Nov 2019 – Jul 2021</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card">
              <i className="fas fa-graduation-cap"></i>
              <h3 className="text">Diploma of Information Technology</h3>
              <p>ECA Graduate Institute, Sydney NSW</p>
              <p>Oct 2018 – Oct 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
