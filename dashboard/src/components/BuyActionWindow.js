import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        zIndex: 1000,
        width: "350px",
      }}
    >
      <h3>Buy Stock</h3>

      <p>
        <strong>Stock UID:</strong> {uid}
      </p>

      <input
        type="number"
        className="form-control mb-3"
        placeholder="Quantity"
      />

      <button
        className="btn btn-primary me-2"
        onClick={() => alert("Buy functionality coming soon!")}
      >
        Buy
      </button>

      <button
        className="btn btn-secondary"
        onClick={generalContext.closeBuyWindow}
      >
        Cancel
      </button>
    </div>
  );
};

export default BuyActionWindow;