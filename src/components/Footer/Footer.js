import React, { Component } from 'react'; 
import './Footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer>
               
              <div className="footer-social">
                <a href="/"><i className="fa fa-facebook-square" aria-hidden="true"></i></a> 
                <a href="/"><i className="fa fa-twitter " aria-hidden="true"></i></a>
                <a href="/"><i className="fa fa-instagram " aria-hidden="true"></i></a>                                                                        
              </div>
              
              <section className="section background-dark">
              <div className="line">
              <div className="margin">
              <div className="s-12 m-12 l-4 margin-m-bottom-2x">
              <h4 className="text-uppercase text-strong">Our Philosophy</h4>
              <p className="text-size-20"><em>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt."</em></p>
                            
              <div className="line">
                <h4 className="text-uppercase text-strong margin-top-30">About Our Company</h4>
                <div className="margin">
                  <div className="s-12 m-12 l-4 margin-m-bottom">
                    <a className="image-hover-zoom" href="/"><img src="img/blog-04.jpg" alt=""/></a>
                  </div>
                  <div className="s-12 m-12 l-8 margin-m-bottom">
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="s-12 m-12 l-4 margin-m-bottom-2x">
              <h4 className="text-uppercase text-strong">Contact Us</h4>
              <div className="line">
                <div className="s-1 m-1 l-1 text-center">
                  <i className="icon-placepin text-primary text-size-12"></i>
                </div>
                <div className="s-11 m-11 l-11 margin-bottom-10">
                  <p><b>Adress:</b> Responsive Street 7, London, UK</p>
                </div>
              </div>
              <div className="line">
                <div className="s-1 m-1 l-1 text-center">
                  <i className="icon-mail text-primary text-size-12"></i>
                </div>
                <div className="s-11 m-11 l-11 margin-bottom-10">
                  <p><a href="/" className="text-primary-hover"><b>E-mail:</b> contact@sampledomain.com</a></p>
                </div>
              </div>
              <div className="line">
                <div className="s-1 m-1 l-1 text-center">
                  <i className="icon-smartphone text-primary text-size-12"></i>
                </div>
                <div className="s-11 m-11 l-11 margin-bottom-10">
                  <p><b>Phone:</b> 0700 000 987</p>
                </div>
              </div>
              <div className="line">
                <div className="s-1 m-1 l-1 text-center">
                  <i className="icon-twitter text-primary text-size-12"></i>
                </div>
                <div className="s-11 m-11 l-11 margin-bottom-10">
                  <p><a href="/" className="text-primary-hover"><b>Twitter</b></a></p>
                </div>
              </div>
              <div className="line">
                <div className="s-1 m-1 l-1 text-center">
                  <i className="icon-facebook text-primary text-size-12"></i>
                </div>
                <div className="s-11 m-11 l-11">
                  <p><a href="/" className="text-primary-hover"><b>Facebook</b></a></p>
                </div>
              </div>
            </div>
              </div>
              </div>

             
            </section>
            <hr className="break margin-top-bottom-0" />
            <section className="padding background-dark">
                
        <div className="line">
          <div className="s-12 l-6">
            <p className="text-size-12">Copyright 2019, Vision Design - graphic zoo</p>
            <p className="text-size-12">All images have been purchased from Bigstock. Do not use the images in your website.</p>
          </div>
          <div className="s-12 l-6">
            <a className="right text-size-12" href="http://www.myresponsee.com" title="Responsee - lightweight responsive framework">Design and coding<br/> by Responsee Team</a>
          </div>
        </div>
      </section>
            </footer> 
         );
    }
}

 
export default Footer;