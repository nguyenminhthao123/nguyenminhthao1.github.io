import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

class Rigister extends Component {
    render() {
        return (
            <div>
              <Header></Header>
              <Menu></Menu>
            <div className="page-banner-area item-bg4">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="page-banner-content">
                      <h2>Đăng Ký Tài Khoản</h2>
                      <ul>
                        <li>
                          <Link to="/home">Trang Chủ</Link>
                          
                        </li>
                        <li>Đăng Ký Tài Khoản</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Page Banner */}
            {/* Start Register Area */}
            <section className="register-area ptb-100">
              <div className="container">
                <div className="register-form">
                  <h2>Đăng Ký Tài Khoản</h2>
                  <form>
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <p className="description">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ &amp; )</p>
                    <button type="submit" className="default-btn">Đăng Ký Ngay</button>
                  </form>
                </div>
              </div>
            </section>
            <Footer></Footer>
          </div>
          
        );
    }
}

export default Rigister;