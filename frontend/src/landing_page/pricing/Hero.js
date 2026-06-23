import React from "react";

function Hero() {
  return (
    <div className="container text-center py-5">
      <div className="row mb-5">
        <h1 className="fs-2">Charges</h1>
        <p className="text-muted fs-4 mb-5">
          List of all charges and taxes
        </p>
      </div>

      <div className="row mt-5">
        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
          <img
            src="media/images/pricingMF.svg"
            alt="Free equity delivery"
            className="img-fluid"
            style={{ width: "65%" }}
          />

          <h2 className="mt-4">Free equity delivery</h2>

          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free —
            ₹0 brokerage.
          </p>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
          <img
            src="media\images\intradayTrades.svg"
            alt="Intraday"
            className="img-fluid"
            style={{ width: "65%" }}
          />

          <h2 className="mt-4">Intraday and F&amp;O trades</h2>

          <p className="text-muted mt-3">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
          <img
            src="media/images/pricingMF.svg"
            alt="Direct MF"
            className="img-fluid"
            style={{ width: "65%" }}
          />

          <h2 className="mt-4">Free direct MF</h2>

          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹0
            commissions &amp; DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;