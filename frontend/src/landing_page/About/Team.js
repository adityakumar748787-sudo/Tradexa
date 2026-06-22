import React from "react";

function Team() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-5">
        <h1
          className="text-center"
          style={{ color: "#1d1c1c", fontWeight: "400" }}
        >
          People
        </h1>
      </div>

      <div className="row align-items-center mt-3 text-muted">

        <div className="col-lg-5 text-center">
          <img
            src="media/images/aditya.jpeg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle"
            style={{ width: "65%" }}
          />

          <h2
            className="mt-4"
            style={{ fontSize: "2rem", color: "#424242" }}
          >
            Aditya Kumar
          </h2>

          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
            }}
          >
            Founder, CEO
          </p>
        </div>

        <div className="col-lg-7 mt-1">
          <p
            style={{
              lineHeight: "2",
              fontSize: "1.15rem",
              color: "#424242",
            }}
          >
           I founded Tradexa to build a modern trading platform that removes complexity from investing and empowers people to participate in financial markets with confidence. By leveraging technology, data, and intuitive design, Tradexa strives to provide a fast, secure, and user-friendly trading experience.
          </p>

          <p
            style={{
              lineHeight: "2",
              fontSize: "1.15rem",
              color: "#424242",
            }}
          >
            As a Computer Science student and full-stack developer, I'm passionate about creating scalable products that solve real-world problems. My goal is to continuously innovate and make Tradexa a trusted platform for traders and long-term investors alike.
          </p>

          <p
            style={{
              lineHeight: "2",
              fontSize: "1.15rem",
              color: "#424242",
            }}
          >
            Outside of development, I enjoy learning new technologies, improving my problem-solving skills, and exploring the ever-evolving world of finance and investing.
          </p>

          <p
            style={{
              lineHeight: "2",
              fontSize: "1.15rem",
            }}
          >
            Connect on{" "}
            <a href="https://www.linkedin.com/in/aditya-kumar-b20710310/" className="text-decoration-none">
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="https://github.com/adityakumar748787-sudo" className="text-decoration-none">
              Github
            </a>{" "}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Team;