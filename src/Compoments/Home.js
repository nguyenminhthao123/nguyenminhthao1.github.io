import React, { Component } from 'react';
import Banner from './Banner';
import BlogHome from './BlogHome';
// import data from './data.json'
import Pordudaital from './Pordudaital';
import datablog from './datablog.json'
import Overview from './Overview';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import axios from 'axios'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
          data:[]
        }
      }
      componentDidMount(){
          console.log("componentDidMount")
        axios({
          method:"GET",
          url:"https://monanbamien.herokuapp.com/api/products/",
          data:null
        }).then((response)=>{
          console.log(response)
          this.setState({
            data:response.data
          })
        }).catch((error)=>{
          console.log(error)
       })
      }
    render() {
        console.log("render")
        var data=this.state.data
        return (
            <div>
                <Header></Header>
                <Menu></Menu>
                <Banner></Banner>


                <section className="top-products-area pt-100 pb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>Món Ngon Nhất</h2>

                        </div>
                        <div className="row">
                            {
                                data.map((value, key) => {
                                    if(key<=5)
                                    {
                                    return (
                                        <Pordudaital key={key} name={value.name} img={value.img} price={value.price} old_price={value.old_price} id={value.id}></Pordudaital>
                                    )}
                                })
                            }
                        </div>
                    </div>
                </section>
                <Overview></Overview>
                <section className="blog-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Thiên Đường Ẩm Thực</h2>
                        <p>"Lời nói chẳng mất tiền mua", vậy tại sao chúng ta không dành một lời kích lệ cho người nấu ăn để họ vui hơn và dốc sức nấu ăn ngon hơn phải không?</p>
                    </div>
                    <div className="row">
                    {
                        datablog.map((value,key)=>{
                                return <BlogHome key={key} photo={value.photo} name={value.name} date={value.date}></BlogHome>
                        })
                    }
                    </div>
                    
                </div>
                </section>
               
               <Footer></Footer>

            </div>

        );
    }
}

export default Home;