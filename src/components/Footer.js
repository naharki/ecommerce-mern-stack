import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer col-1" className="bg bg-light">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <br />
            <h4>Contact Us</h4>
            <h1 className="list-unstyled">
              <li>+977 98XXXXXXXX</li>
              <li>WORLD, ASIA</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <br />
            <h4>About US</h4>

            <span>
              "We are driving Online Marketplace for
              Mobile Phone Accessories offering high quality accessories and
              energizing adornments. We aim to achieve customer satisfication
              with our high quality products and excellent customer support."
            </span>
          </div>

          <br />
          {/* Column3 */}
          <div className="col">
            <br />
            <h4>Fork the project</h4>
            <ui className="list-unstyled">
              <a
                href="https://github.com/nayana-thapa/ecommerce-mern-stack"
                className="text-dark"
              >
                GitHub
              </a>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Copyright Ecom Technology © 2021
            ABN 84925XXXXXX
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
