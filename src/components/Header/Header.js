import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import $ from "jquery";
import UserContext from '../Context/UserContext';

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
      console.log(this.context); 
        return ( 
            <nav className="background-white background-primary-hightlight semplice-navbar">
        <div className="line">
          <div className="s-12 l-2">
            <Link to="/" className="logo"><img src="/imgs/HMP-LOGO_horizontal.png" alt=""/></Link>
          </div>
          <div className="top-nav s-12 l-10">
            <ul className="right chevron">
              {this.context.isAuthenticated ? <li className="welcome-login">Welcome, {this.context.username.substring(0,this.context.username.indexOf('@'))}</li> :
              null }
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/categories/all">Plans</NavLink></li>
              {this.context.isAuthenticated ?  
              <li><NavLink to="/logout">Logout</NavLink></li> :  
              <li><NavLink to="/login">Login</NavLink></li>}
              <li><NavLink to="/contacts">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
         );
    }
}

Header.contextType = UserContext;
 
export default Header;