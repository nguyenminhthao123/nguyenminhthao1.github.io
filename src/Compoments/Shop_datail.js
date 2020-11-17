import React, { Component } from 'react';
// import dulieu from './data.json'
import NewShop from './NewShop';
import ShopDaitail from './ShopDaitail';
import { Link, NavLink } from 'react-router-dom';
import Pordudaital from './Pordudaital';
import Header from './Header';
import Mennuit from './Mennuit';
import Menu from './Menu';
import axios from 'axios'
import Header_daital from './Header_daital';
class Shop_datail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dulieu: [],
      x:false
    }
  }
  hienthi=()=>{
    if(this.state.x===true)
    {
      return  <div className="col-lg-12 col-12">
      <p className="mota">Minh Thao Minh ThaoMinh ThaoMinh ThaoMinh ThaoMinh ThaoMinh ThaoMinh ThaoMinh ThaoMinh ThaoMinh ThaoMinh ThaoMinh Thao</p>
    </div>
    }
  }
  kich = () => {
    this.setState({
      x:!this.state.x
    })
    var x=document.querySelector('.rewiew')
     x.classList.toggle("minhthao")
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://monanbamien.herokuapp.com/api/products/",
      data: null
    }).then((response) => {
      console.log(response)
      this.setState({
        dulieu: response.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }
  render() {

    var dulieu = this.state.dulieu

    console.log(this.props.match.params.id)
    return (
      <div>
        <Header></Header>
        <Menu></Menu>
        {
          dulieu.map((value, key) => {
            if (value.id == this.props.match.params.id) {
              return (
                <Header_daital key={key} name={value.name}></Header_daital>
              )
            }

          })
        }

        <section className="product-details-area pt-100 pb-70">
          <div className="container">

            <div className="row">
              <div className="col-lg-8">
                {
                  dulieu.map((value, key) => {
                    if (value.id == this.props.match.params.id) {
                      return (

                        <ShopDaitail key={key} img={value.img} price={value.price} old_price={value.old_price} name={value.name}></ShopDaitail>
                      )
                    }

                  })
                }
                <div className="col-lg-8 col-12">
                  <div className="row">
                  <div className="col-lg-4 col-4 ">
                  <span className="rewiew" onClick={this.kich}>Mô tả</span>
                  
                  </div>
                 
                  <div className="col-lg-4 col-4">
                  <span className="evaluate">Nhận Xét</span>
                  </div>
                  </div>

                </div>
                <br></br>
               {
                 this.hienthi()
               }
                <h1 className="spnb">Sản Phẩm Nổi Bật</h1>
                <div className="row">

                  {
                    dulieu.map((value, key) => {
                      if (value.id != this.props.match.params.id)
                        if (key <= 8) {
                          return (<Pordudaital key={key} name={value.name} img={value.img} id={value.id} price={value.price} old_price={value.old_price}></Pordudaital>)
                        }

                    })
                  }


                </div>


              </div>


              <div className="col-lg-4 col-md-12">
                <aside className="widget-area">
                  <section className="widget widget_search">
                    <h3 className="widget-title">Search</h3>
                    <form className="search-form">
                      <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input type="search" className="search-field" placeholder="Search..." />
                      </label>
                      <button type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </form>
                  </section>
                  <section className="widget price_list_widget">
                    <h3 className="widget-title">Price</h3>
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="$10" />
                      </div>
                    </form>
                  </section>

                  <section className="widget widget_popular_products">
                    <h3 className="widget-title">Popular Products</h3>
                    {
                      dulieu.map((value, key) => {
                        if (value.id != this.props.match.params.id)
                          if (key <= 3) {
                            return (
                              <NewShop key={key} name={value.name} price={value.price} img={value.img} id={value.id}></NewShop>
                            )
                          }

                      })
                    }
                  </section>

                  <section className="widget widget_tag_cloud">
                    <h3 className="widget-title">Popular Tags</h3>
                    <div className="tagcloud">
                      <a href="#">Architecture</a>
                      <a href="#">Interior Design</a>
                      <a href="#">Designing</a>
                      <a href="#">Construction</a>
                      <a href="#">Buildings</a>
                      <a href="#">Industrial Factory</a>
                      <a href="#">Material</a>
                      <a href="#">Organic</a>
                      <a href="#">Food</a>
                      <a href="#">Tasty</a>
                    </div>
                  </section>
                </aside>
              </div>

            </div>
          </div>
        </section>

      </div>

    );
  }
}

export default Shop_datail;