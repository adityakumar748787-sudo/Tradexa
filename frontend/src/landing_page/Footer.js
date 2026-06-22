import React from "react";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer-section mt-5">
      <div className="container">

        <div className="row">

          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="Zerodha Logo"
            />

            <p className="mt-3">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="social-icons mt-3">
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>

              <hr />

              <a href="#"><FaYoutube /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaTelegram /></a>
            </div>
          </div>


          <div className="col">
            <p><strong>Account</strong></p>

            <a href="#">Open demat account</a><br />
            <a href="#">Minor demat account</a><br />
            <a href="#">NRI demat account</a><br />
            <a href="#">Commodity</a><br />
            <a href="#">Dematerialisation</a><br />
            <a href="#">Fund transfer</a><br />
            <a href="#">MTF</a>
          </div>


          <div className="col">
            <p><strong>Support</strong></p>

            <a href="#">Contact us</a><br />
            <a href="#">Support portal</a><br />
            <a href="#">How to file a complaint?</a><br />
            <a href="#">Status of complaints</a><br />
            <a href="#">Bulletin</a><br />
            <a href="#">Circular</a><br />
            <a href="#">Z-Connect blog</a><br />
            <a href="#">Downloads</a>
          </div>


          <div className="col">
            <p><strong>Company</strong></p>

            <a href="#">About</a><br />
            <a href="#">Products</a><br />
            <a href="#">Pricing</a><br />
            <a href="#">Referral programme</a><br />
            <a href="#">Careers</a><br />
            <a href="#">Zerodha.tech</a><br />
            <a href="#">Press & media</a><br />
            <a href="#">Zerodha Cares (CSR)</a>
          </div>


          <div className="col">
            <p><strong>Quick Links</strong></p>

            <a href="#">Upcoming IPOs</a><br />
            <a href="#">Brokerage charges</a><br />
            <a href="#">Market holidays</a><br />
            <a href="#">Economic calendar</a><br />
            <a href="#">Calculators</a><br />
            <a href="#">Markets</a><br />
            <a href="#">Sectors</a><br />
            <a href="#">Gift Nifty</a>
          </div>

        </div>


        <div className="mt-5" style={{ fontSize: "0.65rem", color: "#666" }}>

          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI –
            SEBI Registration no.: INZ000031633 CDSL/NSDL:
            Depository services through Zerodha Broking Ltd. –
            SEBI Registration no.: IN-DP-431-2019.
            Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India.
          </p>

          <p>
            For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, and for DP related queries write to
            dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
            Document as prescribed by SEBI | ICF.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES:
            Register on SCORES portal. Mandatory details include Name,
            PAN, Address, Mobile Number and E-mail ID.
            Benefits include effective communication and speedy redressal.
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism.
          </p>

          <p>
            Investments in securities market are subject to market risks;
            read all related documents carefully before investing.
          </p>

          <p>
            Attention investors:
            1) Stock brokers can accept securities as margin only by way of
            pledge in the depository system from September 01, 2020.
            2) Update your e-mail and phone number with your broker or
            depository participant and receive OTP directly.
            3) Check your securities, mutual funds and bonds in the
            consolidated statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on net worth as per NSE broker factsheet.
          </p>

          <p>
            Prevent unauthorised transactions in your account.
            Update your mobile number/e-mail IDs with your broker.
            Receive transaction information directly from Exchanges and
            Depositories. KYC is a one-time exercise while dealing in
            securities markets.
          </p>

          <p>
            Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Provide your
            bank account details and authorize payment only
            in case of allotment.
          </p>

          <p>
            As a business, we do not provide stock tips and
            have not authorized anyone to trade on behalf of others.
            If someone claims to be part of Zerodha and offers
            such services, please create a support ticket.
          </p>

          <p>
            Customers availing insurance advisory services offered by Ditto
            will not have access to exchange grievance redressal forums,
            SEBI SCORES/ODR or arbitration for those products.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party
            products and are not exchange traded. They are regulated by
            the Reserve Bank of India (RBI).
          </p>

        </div>


        <div
          className="d-flex justify-content-center flex-wrap gap-4 mt-4 pb-3"
          style={{ fontSize: "0.8rem" }}
        >
          <a href="#">NSE</a>
          <a href="#">BSE</a>
          <a href="#">MCX</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Policies & Procedures</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Disclosure</a>
          <a href="#">For investor's attention</a>
          <a href="#">Investor charter</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;