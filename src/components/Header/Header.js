import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav className="background-white background-primary-hightlight">
        <div className="line">
          <div className="s-12 l-2">
            <a href="index.html" className="logo"><img src="img/logo-free.png" alt=""/></a>
          </div>
          <div className="top-nav s-12 l-10">
            <p className="nav-text"></p>
            <ul className="right chevron">
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contacts">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
         );
    }
}
 
export default Header;