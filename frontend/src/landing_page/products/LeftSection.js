import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">

        <div className="col-lg-6 p-3">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        <div className="col-lg-6">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <div className="mb-4">
            <a
              href={tryDemo}
              style={{ textDecoration: "none", marginRight: "30px" }}
            >
              Try Demo{" "}<i className="fa fa-long-arrow-right"></i>
            </a>

            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              Learn More{" "}<i className="fa fa-long-arrow-right"></i>
            </a>
          </div>

          <a href={googlePlay}>
            <img
              src="media/images/googlePlayBadge.svg"
              alt="Google Play"
              style={{ marginRight: "20px" }}
            />
          </a>

          <a href={appStore}>
            <img
              src="media/images/appstoreBadge.svg"
              alt="App Store"
            />
          </a>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;