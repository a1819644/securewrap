import React from "react";
import "../assets/HeaderStyle.css";
import logo from "../imgAssets/orginal_logo-removebg-preview.png";
interface props {
  promtionHeader?: string;
}

function Header({ promtionHeader }: props) {
  return (
    <header>
      <div className="container-fluid text-center promotion-header ">
        <div className="col p-2">
          <p>{promtionHeader}</p>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-header p-4">
        <div className="container-fluid">
          {/* todo: add the links to the home page */}
          <a className="navbar-brand" href="#">
            Securewrap
          </a>
          {/* todo: toggle button isnt  working on small size window */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
