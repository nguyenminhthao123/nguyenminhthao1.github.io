import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

class Login extends Component {
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
                                    <h2>Đăng Nhập</h2>
                                    <ul>
                                        <li>
                                            <Link to="/home">Trang Chủ</Link>
                                        </li>
                                        <li>Đăng Nhập</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="login-area ptb-100">
                    <div className="container">
                        <div className="login-form">
                            <h2>Đăng Nhập</h2>
                            <form>
                                <div className="form-group">
                                    <label>Username or email</label>
                                    <input type="text" className="form-control" placeholder="Username or email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="checkme" />
                                            <label className="form-check-label" htmlFor="checkme">Nhớ Tài Khoản</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password">
                                        <a href="#" className="lost-your-password">Quên Mật Khẩu?</a>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="  left"></div>
                                          <span>Hoặc</span>
                                         
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 ">
                                      <button type="button" name="" id="" class="btn btn-primary" ><i class="fa fa-facebook "></i>Facebook</button>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 ">
                                      <button type="button" name="" id="" class="btn btn-primary" ><i class="fa fa-google"></i>Google</button>
                                    </div>
                                </div>
                                <button type="submit" className="default-btn">Đăng Nhập</button>
                            </form>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>


        );
    }
}

export default Login;