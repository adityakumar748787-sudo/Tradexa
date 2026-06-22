import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6 p-5">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <div>
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="col-lg-6">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;