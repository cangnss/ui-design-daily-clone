import React from 'react';
import './Filters.css';
import figma from './figma.png';
import sketch from './sketch.png';
import studio from './studio.png';
import adobeXd from './adobe-xd.png';
import adobePs from './adobe-ps.png';

function Filters() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="text-bg ps-4 pt-3">
                        <label className="text-center mx-auto ms-3">
                            Latest
                        </label>
                        <label className="text-center mx-auto ms-4">
                            Popular
                        </label>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <ul className="filters-word d-flex">
                        <li>All</li>
                        <li>Web</li>
                        <li>Mobile</li>
                        <li>UI Kit</li>
                        <li>Coded</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="logo-list d-flex">
                        <li><img src={figma} className="img-fluid" alt='' width="31" height="31" /></li>
                        <li><img src={sketch} className="img-fluid" alt='' width="31" height="31" /></li>
                        <li><img src={studio} className="img-fluid" alt='' width="31" height="31" /></li>
                        <li><img src={adobeXd} className="img-fluid" alt='' width="31" height="31" /></li>
                        <li><img src={adobePs} className="img-fluid" alt='' width="31" height="31" /></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Filters;