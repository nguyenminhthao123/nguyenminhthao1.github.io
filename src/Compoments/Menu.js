import React, { Component } from 'react';
import log from "../img/logo.png"
import Mennuit from './Mennuit';
import Search from './Search';

import { BrowserRouter as  Router  } from 'react-router-dom'


class Menu extends Component {
    render() {
        return (
            <div className="navbar-area">
            <div className="main-responsive-nav">
              <div className="container">
                <div className="main-responsive-menu">
                  <div className="logo">
                    <a>
                      <img src={log} alt="image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-navbar">
              <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                  <a className="navbar-brand">
                  <img src={log} alt="image" />
                  </a>
                  <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                 
                 
                  <Mennuit>  </Mennuit>
                 
                  
                 
                 
                  
                  
                    <div className="others-options d-flex align-items-center">
                     
                      <div className="option-item">
                        <div className="cart-btn">
                          <a >
                          <i class="fa fa-shopping-cart"/>
                            <span>0</span>
                          </a>
                        </div>
                      </div>
                     <Search></Search>
                      <div className="option-item">
                        <div className="burger-menu">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="others-option-for-responsive">
              <div className="container">
                <div className="dot-menu">
                  <div className="inner">
                    <div className="circle circle-one" />
                    <div className="circle circle-two" />
                    <div className="circle circle-three" />
                  </div>
                </div>
                <div className="container">
                  <div className="option-inner">
                    <div className="others-options d-flex align-items-center">
                      <div className="option-item">
                        <div className="languages-list">
                          <select>
                            <option value={1}>Eng</option>
                            <option value={2}>Ger</option>
                            <option value={3}>Span</option>
                          </select>
                        </div>
                      </div>
                      <div className="option-item">
                        <div className="cart-btn">
                          <a >
                            <i className="flaticon-shopping-cart" />
                            <span>0</span>
                          </a>
                        </div>
                      </div>
                      <Search></Search>
                      <div className="option-item">
                        <div className="burger-menu">
                          <span />
                          <span />
                          <span />
                        </div>
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

export default Menu;