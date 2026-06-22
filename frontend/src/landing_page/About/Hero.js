import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5 ">
        <h1
          className="fs-2"
          style={{ lineHeight: "1.5", color: "#424242", fontWeight: "400" }}
        >
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <hr className="mb-5 mt-5" style={{ color: "#837e7e" }} />

      <div className="row mt-5 mb-5 text-muted">
        <div className="col-lg-6 pe-5">
          <p style={{ lineHeight: "2", fontSize: "1.1rem" }}>
            We kick-started operations on the 15th of August, 2010 with the
            goal of breaking all barriers that traders and investors face in
            India in terms of cost, support, and technology. We named the
            company Zerodha, a combination of Zero and "Rodha", the Sanskrit
            word for barrier.
          </p>

          <p style={{ lineHeight: "2", fontSize: "1.1rem" }}>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p style={{ lineHeight: "2", fontSize: "1.1rem" }}>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-lg-6 ps-5">
          <p style={{ lineHeight: "2", fontSize: "1.1rem" }}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p style={{ lineHeight: "2", fontSize: "1.1rem" }}>
            <a href="#" className="text-decoration-none">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p style={{ lineHeight: "2", fontSize: "1.1rem" }}>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
              blog
            or see what the media is{" "}
            
              saying about us
            
            or learn more about our business and product{" "}
            
              philosophies
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;