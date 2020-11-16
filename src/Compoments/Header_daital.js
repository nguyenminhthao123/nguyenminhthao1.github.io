import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header_daital extends Component {
    render() {
        return (
            <div className="page-banner-area item-bg4">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-banner-content">
                      <h2>Thông Tin chi tiết</h2>
                  <ul>
                    <li>
                      <Link to="/home">Trang Chủ</Link>
                    </li>
        <li>{this.props.name}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
    }
}

export default Header_daital;