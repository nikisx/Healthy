import React, { Component } from 'react';

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
              <li><a href="index.html">Home</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
         );
    }
}
 
export default Header;