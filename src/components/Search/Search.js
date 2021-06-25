import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="container mt-5 main-search">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex">
            <div class="dropdown ms-5 mt-3">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Free designs
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex search-div ms-3">
              <i class="fas fa-search fa-2x mt-3"></i>
              <input
                type="text"
                className="form-control search-input mt-3"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Search;
