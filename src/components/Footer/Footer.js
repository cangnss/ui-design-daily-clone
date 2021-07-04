import "./Footer.css";
import charity1 from "./charity1.png";

function Footer() {
  return (
    <div className="footer mb-1">
      <div className="container-fluid">
        {/* top-row */}
        <div className="row">
          <div className="col-md-3 ms-3 mt-5 pt-5 d-flex donate-box">
            <div className="charity-img">
              <img src={charity1} alt="" className="img-fluid" />
            </div>
            <div className="content d-flex flex-column">
              <div className="text">
                <h2 className="fw-bold">Do you have designs to spare?</h2>
                <p className="w-75">
                  Donate your design and contribute to the community.
                </p>
              </div>
              <div className="donate-btn">
                <span>Donate now!</span>
              </div>
            </div>
          </div>
          <div className="col-md-2 mt-5">
            <ul className="list-group">
              <li className="list-group-item list-title fw-bold">Explore</li>
              <li className="list-group-item">Free designs</li>
              <li className="list-group-item">Latest designs</li>
              <li className="list-group-item">Most popular designs</li>
              <li className="list-group-item">Contributors</li>
            </ul>
          </div>
          <div className="col-md-2 mt-5">
            <ul className="list-group">
              <li className="list-group-item list-title fw-bold">Site</li>
              <li className="list-group-item">License</li>
              <li className="list-group-item">Articles</li>
              <li className="list-group-item">About</li>
              <li className="list-group-item">Support</li>
              <li className="list-group-item">Sponsor UI Design Daily</li>
            </ul>
          </div>
          <div className="col-md-3 mt-5 ms-4 d-flex flex-column">
            <div className="mb-4">
              <span className="fw-bold fs-5" style={{ color: "#FF6A95" }}>
                Follow Us
              </span>
            </div>
            <div className="mb-5">
              <i class="fal fa-basketball-ball fa-2x"></i>
              <i class="fab fa-twitter fa-2x ms-4"></i>
              <i class="fab fa-instagram fa-2x ms-4"></i>
            </div>
            <div className="d-flex">
              <div>
                <i class="fab fa-slack fa-3x"></i>
              </div>
              <div className="ms-3">
                <p className="fs-5 slack-text">Join our Slack channel</p>
              </div>
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="row-fluid">
          <div className="advertisement">
            <i class="fas fa-ad fa-3x"></i>
          </div>
        </div>
        {/* third row */}
        <div className="row mt-4">
          <div className="d-flex justify-content-between">
            <div>
              <span className="fs-3">Legal</span>
            </div>
            <div className="mt-2">
              <span className="fs-5">
                &copy; 2021 UI Design Daily All Rights Reserved. Design Ali
                Can Güneş
              </span>
            </div>
            <div className="donated">
              <h4 className="text-end fw-bold fs-3">1384</h4>
              <p className="fw-bold">Design files donated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
