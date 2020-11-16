import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
      <div className="footer-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <h2>
                    <a href="index.html">Orgo</a>
                  </h2>
                </div>
                <p>Măng tươi, bắp chuối, vịt bầu – chuẩn bị nấu bún, mời em qua chơi</p>
                <ul className="social">
                  <li>
                    <a href="#" className="facebook" target="_blank">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter" target="_blank">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest" target="_blank">
                      <i className="bx bxl-pinterest-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="linkedin" target="_blank">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Quán Ăn Anh Em</h3>
                <ul className="quick-links">
                  <li>
                    <a href="#">Thông Tin</a>
                  </li>
                 
                  <li>
                    <a href="#">Thực Đơn</a>
                  </li>
                  <li>
                    <a href="#">Thiên Đường Ẩm Thực</a>
                  </li>
                 
                  <li>
                    <a href="#">Liên Hệ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-footer-widget">
                <h3>Thông Tin Liên Hệ</h3>
                <ul className="footer-contact-info">
                  <li>
                    <i className="bx bxs-phone" />
                    <span>Điện Thoại</span>
                    <a href="tel:0962263642">0962263642</a>
                  </li>
                  <li>
                    <i className="bx bx-envelope" />
                    <span>Email</span>
                    <a href="mailto:17521066@gm.uit.edu.vn">17521066@gm.uit.edu.vn</a>
                  </li>
                  <li>
                    <i className="bx bx-map" />
                    <span>Địa Chỉ</span>
                        Phú Trung Cát Thành Phù Cát Bình Định
                      </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Start Go Top Area --> */}
      <div class="go-top">
          <i class='bx bx-up-arrow-alt'></i>
      </div>
      {/* <!-- End Go Top Area --> */}
</div>     
    );
  }
}

export default Footer;