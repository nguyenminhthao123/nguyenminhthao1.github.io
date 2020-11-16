import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Home from '../Compoments/Home';
import Login from '../Compoments/Login';
import Rigister from '../Compoments/Rigister';
import { BrowserRouter as Route } from 'react-router-dom';
import Shop_datail from '../Compoments/Shop_datail';

class Dieuhuong extends Component {
    render() {
        
        return (
            <div>
                    <Route path="/dang-nhap" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/dang-ky" component={Rigister}></Route>
                    <Route path="/chi-tiet" component={Shop_datail}></Route>
            </div>
        );
    }
}

export default Dieuhuong;