import React, { Component } from 'react';

class Overview extends Component {
    render() {
        return (
            <section className="overview-area ptb-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-6">
                  <div className="overview-content">
                    <h3>Giảm Giá Trong Tuần Này</h3>
                    <p>Rẻ như bèo, nghèo cũng có tiền mua</p>
                    <div className="overview-btn">
                      <a href="shop-1.html" className="default-btn">Xem Ngay</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="overview-video">
                    <a href="https://www.youtube.com/watch?v=a-2iTFdtnvk&t=958s&ab_channel=KhoaiLangThang" className="video-btn popup-youtube">
                      <i className="bx bxl-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        );
    }
}

export default Overview;