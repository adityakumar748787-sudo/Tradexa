import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container text-center"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <h1 className="display-1 fw-bold">404</h1>

      <h2 className="mt-3">Page Not Found</h2>

      <p className="text-muted mt-3">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link to="/" className="btn btn-primary mt-3">
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;