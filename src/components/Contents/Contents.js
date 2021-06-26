import React from "react";
import "./Contents.css";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import sketch from "../Filters/sketch.png";
import profile from "./profile.png";

function Contents() {
  return (
    <div className="container mt-5">
      <div className="row d-flex flex-wrap">
        <div className="col-md-4">
          <div
            className="card rounded position-relative"
            style={{ border: "none" }}
          >
            <img src={image1} className="card-img-top" alt="..." />
            <div className="logo-img position-absolute top-0 start-0 translate-middle ms-5 mt-5">
              <img src={sketch} className="img-fluid" />
            </div>
            <div className="card-body d-flex justify-content-between">
              <div className="d-flex">
                <img src={profile} alt="" className="rounded-circle" width="38" height="38" />
                <span className="ms-2 mt-2">
                  by <strong>Jenny Molla</strong>
                </span>
              </div>
              <div className="d-flex mt-2">
                <div>
                  <i class="fas fa-code fa-lg"></i>
                  <span className="fw-bold">25</span>
                </div>
                <div className="ms-2">
                  <i class="far fa-thumbs-up fa-lg"></i>
                  <span className="fw-bold">25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card rounded position-relative"
            style={{ border: "none" }}
          >
            <img src={image2} className="card-img-top" alt="..." />
            <div className="logo-img position-absolute top-0 start-0 translate-middle ms-5 mt-5">
              <img src={sketch} className="img-fluid" />
            </div>
            <div className="card-body d-flex justify-content-between">
              <div className="d-flex">
                <img src={profile} alt="" className="rounded-circle" width="38" height="38" />
                <span className="ms-2 mt-2">
                  by <strong>Jenny Molla</strong>
                </span>
              </div>
              <div className="d-flex mt-2">
                <div>
                  <i class="fas fa-code fa-lg"></i>
                  <span className="fw-bold">25</span>
                </div>
                <div className="ms-2">
                  <i class="far fa-thumbs-up fa-lg"></i>
                  <span className="fw-bold">25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card rounded position-relative"
            style={{ border: "none" }}
          >
            <img src={image3} className="card-img-top" alt="..." />
            <div className="logo-img position-absolute top-0 start-0 translate-middle ms-5 mt-5">
              <img src={sketch} className="img-fluid" />
            </div>
            <div className="card-body d-flex justify-content-between">
              <div className="d-flex">
                <img src={profile} alt="" className="rounded-circle" width="38" height="38" />
                <span className="ms-2 mt-2">
                  by <strong>Jenny Molla</strong>
                </span>
              </div>
              <div className="d-flex mt-2">
                <div>
                  <i class="fas fa-code fa-lg"></i>
                  <span className="fw-bold">25</span>
                </div>
                <div className="ms-2">
                  <i class="far fa-thumbs-up fa-lg"></i>
                  <span className="fw-bold">25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contents;
