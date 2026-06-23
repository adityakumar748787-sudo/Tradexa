import React from "react";
import { FaPlusCircle, FaUser, FaChartBar, FaCreditCard, FaRegCircle } from "react-icons/fa";

function CreateTicket() {
  return (
    <div className="container py-5">

      <h2 className="mb-5">
        To create a ticket, select a relevant topic
      </h2>

      <div className="row gy-5">

        {/* Column 1 */}
        <div className="col-lg-4 col-md-6">

          <h4 className="mb-4">
            <FaPlusCircle className="me-2" />
            Account Opening
          </h4>

          <div className="d-flex flex-column gap-3">
            <a href="/" className="text-decoration-none">Online Account Opening</a>
            <a href="/" className="text-decoration-none">Offline Account Opening</a>
            <a href="/" className="text-decoration-none">
              Company, Partnership and HUF Account Opening
            </a>
            <a href="/" className="text-decoration-none">NRI Account Opening</a>
            <a href="/" className="text-decoration-none">Charges at Zerodha</a>
            <a href="/" className="text-decoration-none">
              Zerodha IDFC FIRST Bank 3-in-1 Account
            </a>
            <a href="/" className="text-decoration-none">Getting Started</a>
          </div>

        </div>

        {/* Column 2 */}
        <div className="col-lg-4 col-md-6">

          <h4 className="mb-4">
            <FaUser className="me-2" />
            Your Zerodha Account
          </h4>

          <div className="d-flex flex-column gap-3">
            <a href="/" className="text-decoration-none">Login Credentials</a>
            <a href="/" className="text-decoration-none">
              Account Modification and Segment Addition
            </a>
            <a href="/" className="text-decoration-none">
              DP ID and bank details
            </a>
            <a href="/" className="text-decoration-none">Your Profile</a>
            <a href="/" className="text-decoration-none">
              Transfer and conversion of shares
            </a>
          </div>

        </div>

        {/* Column 3 */}
        <div className="col-lg-4 col-md-6">

          <h4 className="mb-4">
            <FaChartBar className="me-2" />
            Your Zerodha Account
          </h4>

          <div className="d-flex flex-column gap-3">
            <a href="/" className="text-decoration-none">
              Margin/leverage, Product and Order types
            </a>
            <a href="/" className="text-decoration-none">
              Kite Web and Mobile
            </a>
            <a href="/" className="text-decoration-none">Trading FAQs</a>
            <a href="/" className="text-decoration-none">Corporate Actions</a>
            <a href="/" className="text-decoration-none">Sentinel</a>
            <a href="/" className="text-decoration-none">Kite API</a>
            <a href="/" className="text-decoration-none">
              Pi and other platforms
            </a>
            <a href="/" className="text-decoration-none">Stockreports+</a>
            <a href="/" className="text-decoration-none">GTT</a>
          </div>

        </div>

      </div>

      {/* Second Row */}

      <div className="row gy-5 mt-5">

        {/* Funds */}
        <div className="col-lg-4 col-md-6">

          <h4 className="mb-4">
            <FaCreditCard className="me-2" />
            Funds
          </h4>

          <div className="d-flex flex-column gap-3">
            <a href="/" className="text-decoration-none">Adding Funds</a>
            <a href="/" className="text-decoration-none">Fund Withdrawal</a>
            <a href="/" className="text-decoration-none">eMandates</a>
            <a href="/" className="text-decoration-none">Adding Bank Accounts</a>
          </div>

        </div>

        {/* Console */}
        <div className="col-lg-4 col-md-6">

          <h4 className="mb-4">
            <FaRegCircle className="me-2" />
            Console
          </h4>

          <div className="d-flex flex-column gap-3">
            <a href="/" className="text-decoration-none">Reports</a>
            <a href="/" className="text-decoration-none">Ledger</a>
            <a href="/" className="text-decoration-none">Portfolio</a>
            <a href="/" className="text-decoration-none">60 Day Challenge</a>
            <a href="/" className="text-decoration-none">IPO</a>
            <a href="/" className="text-decoration-none">Referral Program</a>
          </div>

        </div>

        {/* Coin */}
        <div className="col-lg-4 col-md-6">

          <h4 className="mb-4">
            <FaRegCircle className="me-2" />
            Coin
          </h4>

          <div className="d-flex flex-column gap-3">
            <a href="/" className="text-decoration-none">
              Understanding Mutual Funds
            </a>
            <a href="/" className="text-decoration-none">About Coin</a>
            <a href="/" className="text-decoration-none">
              Buying and Selling through Coin
            </a>
            <a href="/" className="text-decoration-none">Starting an SIP</a>
            <a href="/" className="text-decoration-none">
              Managing your Portfolio
            </a>
            <a href="/" className="text-decoration-none">Coin App</a>
            <a href="/" className="text-decoration-none">Moving to Coin</a>
          </div>

        </div>

      </div>

    </div>
  );
}

export default CreateTicket;