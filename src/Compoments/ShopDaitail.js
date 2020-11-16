import React, { Component } from 'react';

class ShopDaitail extends Component {
  render() {

    return (
    
       
              
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="product-details-image" >
                      <img src={this.props.img}></img>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="product-details-desc">
                      <h3>{this.props.name} </h3>
                      <div className="price">
                        <span className="new-price">{this.props.price}</span>
                        <span className="old-price">{this.props.old_price}</span>
                      </div>
                      <div className="product-review">
                        <div className="rating">
                          <i className="bx bxs-star" />
                          <i className="bx bxs-star" />
                          <i className="bx bxs-star" />
                          <i className="bx bxs-star" />
                          <i className="bx bxs-star" />
                        </div>
                        <a href="#" className="rating-count">3 reviews</a>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                      <div className="product-add-to-cart">
                        <div className="input-counter">
                          <span className="minus-btn">
                            <i className="bx bx-minus" />
                          </span>
                          <input type="text" min={1} defaultValue={1} />
                          <span className="plus-btn">
                            <i className="bx bx-plus" />
                          </span>
                        </div>
                        <button type="submit" className="default-btn">
                          Thêm vào giỏ hàng
                    <span />
                        </button>
                      </div>
                      <div className="buy-checkbox-btn">
                        <div className="item">
                          <input className="inp-cbx" id="cbx" type="checkbox" />
                          <label className="cbx" htmlFor="cbx">

                          </label>
                        </div>
                        <div className="item">
                          <a href="#" className="btn btn-light">Mua Ngay</a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

               
            
              
         

        
     
    );
  }
}

export default ShopDaitail;