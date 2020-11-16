import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Pordudaital extends Component {
  chuyendoiURL=(str)=>{
    // Chuyển hết sang chữ thường
str = str.toLowerCase();     

// xóa dấu
str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
str = str.replace(/(đ)/g, 'd');

// Xóa ký tự đặc biệt
str = str.replace(/([^0-9a-z-\s])/g, '');

// Xóa khoảng trắng thay bằng ký tự -
str = str.replace(/(\s+)/g, '-');

// xóa phần dự - ở đầu
str = str.replace(/^-+/g, '');

// xóa phần dư - ở cuối
str = str.replace(/-+$/g, '');

// return
return str;

}
    render() {
      // console.log(this.props.match.params.id)
        return (
          <div className="col-lg-4 col-md-6">
        <div className="top-products-item">
          <div className="products-image">
            <Link to={"/Chi-tiet/"+this.chuyendoiURL(this.props.name)+"."+this.props.id}><img src={this.props.img} alt="image" /></Link>
           
            <ul className="products-action">
              <li>
                <a href="cart.html" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i class="fa fa-cart-plus"></i></a>
              </li>
              <li>
                <a href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i class="fa fa-heart"></i></a>
              </li>
              <li>
                <a href="#" data-tooltip="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#productsQuickView">
                 <i class="fa fa-search"></i>
                </a>
              </li>
            </ul>
            <div className="sale">
              <span>News</span>
            </div>
          </div>
          <div className="products-content">
            <h3>
            <Link to={"/Chi-tiet/"+this.chuyendoiURL(this.props.name)+"."+this.props.id}>{this.props.name}</Link>
        
            </h3>
            <div className="price">
        <span className="new-price">{this.props.price}VND</span>
        <span className="old-price">{this.props.old_price}VND</span>
            </div>
            <ul className="rating">
              <li>
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bx-star" />
              </li>
            </ul>
          </div>
        </div>
      </div>
        );
    }
}

export default Pordudaital;