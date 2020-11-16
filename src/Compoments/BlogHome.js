import React, { Component } from 'react';

class BlogHome extends Component {
    render() {
      
        return (

    
   
      <div className="col-lg-4 col-md-6">
        <div className="single-blog-item">
          <div className="image">
            <a href="blog-details.html"><img src={this.props.photo}alt="image" /></a>
            <div className="date">
                  <span>{this.props.date}</span>
            </div>
          </div>
          <div className="content">
            <h3>
        <a href="blog-details.html">{ this.props.name}</a>
            </h3>
            <a href="blog-details.html" className="blog-btn">Xem thêm +</a>
          </div>
        </div>
      </div>
     
     
   
  

        );
    }
}

export default BlogHome;