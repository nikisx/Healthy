import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import $ from "jquery";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          
         }
    }
 
    componentDidMount(){
        var prev = 0;
        var $window = $(window);
        var nav = $('.semplice-navbar');
      
        $window.on('scroll', function(){
        var scrollTop = $window.scrollTop();
        nav.toggleClass('hide-navbar', scrollTop > prev);
        prev = scrollTop;
        });
      
        $(window).scroll(function() {
          if ($(this).scrollTop() <= 300) {
            $('.semplice-navbar').removeClass('hide-navbar');
          }
        });
        
    }

    render() { 
        return ( 
            <nav className="background-white background-primary-hightlight semplice-navbar">
        <div className="line">
          <div className="s-12 l-2">
            <Link to="/" className="logo"><img src="/imgs/HMP-LOGO_horizontal.png" alt=""/></Link>
          </div>
          <div className="top-nav s-12 l-10">
            <p className="nav-text"></p>
            <ul className="right chevron">
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/categories/all">Plans</NavLink></li>
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