import React from "react";

function Brokerage() {
  return (
    <div className="container py-5">
      <div className="row border-top pt-5">
        <div className="col-lg-6 text-center mb-4">
          

          <h3 className="mt-4">
            <a href="/" style={{ textDecoration: "none" }}>
              Brokerage calculator
            </a>
          </h3>

          <ul className="text-start mt-4 text-muted">
            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>

            <li className="mt-3">
              Digital contract notes will be sent via e-mail.
            </li>

            <li className="mt-3">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>

            <li className="mt-3">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>

            <li className="mt-3">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>

            <li className="mt-3">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-lg-6 mb-4">
  <h3 className="text-primary text-center mb-4">List of charges</h3>

  <div className="mb-4">
    <p className="text-muted">
      Tax by the government when transacting on the exchanges. Charged as
      above on both buy and sell sides when trading equity delivery.
      Charged only on selling side when trading intraday or on F&amp;O.
    </p>

    <p className="text-muted">
      When trading at Zerodha, STT/CTT can be a lot more than the brokerage
      we charge. Important to keep a tab.
    </p>
  </div>

  <div className="mb-4">

    <p className="text-muted">
      BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to
      ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged
      into a new group X w.e.f 01.12.2017)
    </p>

    <p className="text-muted">
      BSE has revised transaction charges in SS and ST groups to ₹1,00,000
      per crore of gross turnover.
    </p>


  </div>

  <div className="mb-4">
    {/* <h5>Stamp Charges</h5> */}
    <p className="text-muted">
      Stamp charges by the Government of India as per the Indian Stamp Act
      of 1899 for transacting in instruments on the stock exchanges and
      depositories.
    </p>
  </div>
</div>
      </div>
    </div>
  );
}

export default Brokerage;