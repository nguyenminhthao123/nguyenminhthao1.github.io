import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  NavLink
} from "react-router-dom";

class Mennuit extends Component {
    render() {
        return (
            <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink to="/home" className="nav-link">Trang Chủ</NavLink>
                
             
              
              
            </li>
            <li className="nav-item">
            <a  className="nav-link">
                  Tài Khoản
                  <i className="bx bx-chevron-down" />
                  </a>
                
               
              
              <ul className="dropdown-menu">
                <li className="nav-item">
                <NavLink to="/dang-nhap">Đăng Nhập</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/dang-ky">Đăng Ký</NavLink>
                </li>
                
               
               
              
               
                
              </ul>
            </li>
           
            <li className="nav-item">
              <a  className="nav-link">
                Món Ăn
                <i className="bx bx-chevron-down" />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a className="nav-link">
                    Danh Sách Món Ăn
                  </a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link">
                   Giỏ Hàng
                  </a>
                </li>
                <li className="nav-item">
                  <a  className="nav-link">
                    Thanh Toán
                  </a>
                </li>
                <li className="nav-item">
                  <a  className="nav-link">
                   Chi Tiết Món Ăn
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a  className="nav-link">
                Thế Giới Ẩm Thực
                
              </a>
            
            </li>
            <li className="nav-item">
              <a  className="nav-link">
                Hỗ Trợ
              </a>
            </li>
          </ul>
        );
    }
}

export default Mennuit;