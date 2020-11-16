import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="top-header-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <ul className="top-header-information">
                    <li>
                      <i className="bx bxs-map" />
                      Phú Trung Cát Thành Phù Cát Bình Định
                    </li>
                    <li>
                      <i className="bx bx-envelope" />
                      <a href="mailto:17521066@gm.uit.edu">17521066@gm.uit.edu</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="top-header-social">
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Header;