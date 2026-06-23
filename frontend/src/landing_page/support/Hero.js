import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid py-5 px-0"
      id="supportHero"
      style={{ backgroundColor: "#387ed1", color: "white" }}
    >
      <div className="container">

        {/* Top Row */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h4>Support Portal</h4>

          <a
            href="/"
            className="text-white"
            style={{ fontSize: "18px" }}
          >
            Track Tickets
          </a>
        </div>

        {/* Bottom Row */}
        <div className="row">

          {/* Left Side */}
          <div className="col-lg-7">

            <h2
              style={{
                fontWeight: "400",
                lineHeight: "1.5",
              }}
            >
              Search for an answer or browse help topics
              <br />
              to create a ticket
            </h2>

            <input
              type="text"
              className="form-control p-4 mt-4"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
              style={{
                height: "65px",
                fontSize: "18px",
                borderRadius: "5px",
              }}
            />

            <div className="mt-4">
              <a href="/" className="text-white me-4">
                Track account opening
              </a>

              <a href="/" className="text-white me-4">
                Track segment activation
              </a>

              <a href="/" className="text-white me-4">
                Intraday margins
              </a>

              <a href="/" className="text-white">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-5 mt-4 mt-lg-0">

            <h2>Featured</h2>

            <ol className="mt-4">
              <li className="mb-4">
                <a href="/" className="text-white">
                  Current Takeovers and Delisting – January 2024
                </a>
              </li>

              <li>
                <a href="/" className="text-white">
                  Latest Intraday leverages – MIS & CO
                </a>
              </li>
            </ol>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;