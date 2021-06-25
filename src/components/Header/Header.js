import React from "react";
import "./Header.css";
import logo from "./ui-logo.png";

function Header() {
  return (
    <section id="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="40" height="40" />
            <span className="ms-2">Design Daily</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mx-auto text-center"
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <label>
                  <a className="nav-link" href="#">
                    Free designs
                  </a>
                </label>
              </li>
              <li className="nav-item">
                <label>
                  <a className="nav-link" href="#">
                    License
                  </a>
                </label>
              </li>
              <li className="nav-item">
                <label>
                  <a className="nav-link" href="#">
                    Articles
                  </a>
                </label>
              </li>
              <li className="nav-item">
                <label>
                  <a className="nav-link" href="#">
                    Contributors
                  </a>
                </label>
              </li>
              <li className="nav-item">
                <label>
                  <a className="nav-link" href="#">
                    About
                  </a>
                </label>
              </li>
            </ul>
            <div>
                <button type="button" class="btn btn-light">Log in</button>
                <button type="button" className="ms-2 btn btn-primary btn-sign-up">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default Header;
