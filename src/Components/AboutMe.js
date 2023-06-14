import profileImage from "../assets/images/profile-1.jpg";
export const AboutMe = () => {
  return (
    <section id="about-me" className="container mt-3 py-5">
      <div className="title">
        <span>About Me</span>
      </div>
      <div className="row">
        <div className="col-md-5 mb-5">
          <img src={profileImage} alt="my" width="60%" />
        </div>
        <div className="col-md-7">
          <h2>I'm Suman and I'm a</h2>
          <p>
            Creative and highly reliable IT graduate from Victoria University,
            looking for an IT-related position with a focus on web and mobile
            applications. Personable and astute student with proven time
            management and collaboration skills. Understanding of general
            employability skills and the importance of working as part of a
            team, learning from others and developing as a professional.
            Excellence in coding and problem-solving skills to create websites
            based on the client’s technical and design specifications.
          </p>
        </div>
      </div>
    </section>
  );
};
