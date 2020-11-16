import logo from './logo.svg';
import './App.css';
import Header from './Compoments/Header';
import Menu from './Compoments/Menu';
import Banner from './Compoments/Banner';
import Home from './Compoments/Home';
import Footer from './Compoments/Footer';
import Login from './Compoments/Login';
import Rigister from './Compoments/Rigister';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Shop_datail from './Compoments/Shop_datail';


function App() {
  return (
    <div className="App">
      <Router>
                    <Route path="/dang-nhap" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/dang-ky" component={Rigister}></Route>
                    <Route path="/chi-tiet/:slug.:id" component={Shop_datail}></Route>
      </Router>








    </div>
  );
}

export default App;
