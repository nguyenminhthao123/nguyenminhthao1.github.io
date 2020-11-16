import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div class="main-banner">
            <div class="main-banner-item">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="main-banner-content">
                                <span>Tận Hưởng Hương Vị Tự Nhiên Như Ở Nhà</span>
                                <h1>Món Ngon Nhà Làm</h1>
                                <p>Yêu là phải nói, đói là phải ăn.</p>
                                <div class="banner-btn">
                                    <a href="shop-1.html" class="default-btn">Món Ăn</a>
                                    <a href="cart.html" class="optional-btn">Chọn Mua</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Banner;