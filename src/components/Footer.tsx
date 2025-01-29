import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBusinessTime,
  faDiamond,
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-1 border-bottom">
          <div className="me-4 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" className="me-4 text-reset">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="" className="me-4 text-reset">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="" className="me-4 text-reset">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="" className="me-4 text-reset">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <FontAwesomeIcon icon={faDiamond} /> &nbsp;Securewrap
                </h6>
                <p> One stop for all your packaging needs!</p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p>
                  <FontAwesomeIcon icon={faLocationArrow} />
                  &nbsp;New York, NY 10012, US
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />
                  &nbsp;contactus.securewrap.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faBusinessTime} />
                  &nbsp;Business Hours (Mon-Fri): 09:00 AM to 6:00 PM AEDT
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} />
                  &nbsp;+ 01 234 567 88
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Support</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Track delivery
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Update delivery
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Return policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy policy
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Information</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Terms and conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-2">
          © 2025 Copyright:
          <a className="text-reset fw-bold" href="securewrap.com.au">
            &nbsp; securewrap.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
