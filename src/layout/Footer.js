import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row text-center text-white">
          <div className="col-lg-12">
            <ul className="footer-links">
              <li>
                <a href="faq.html">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="terms_conditions.html">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="privacy_policy.html">Privacy Policy</a>
              </li>
              <li>
                <a href="legal.html">Disclosures </a>
              </li>
            </ul>
            <ul className="social-footer">
              <li>
                <a
                  href="https://instagram.com/pounce.money"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/pouncemoneyinc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/pouncemoney"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/pouncemoney"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" ariahidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>Pounce Money, Inc is a registered Delaware company.</p>
        <p>
          All Financial products and services are originated by Pounce Money,
          Inc
        </p>
      </div>
    </footer>
  );
};

export default Footer;
