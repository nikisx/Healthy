import React, { Component } from 'react';

class ImageBnnaer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className="section background-white">
            <div className="full-width text-center">
              <img className="center margin-bottom-30" style={{marginTop: "-210px"}} src="imgs/bio.png" alt=""/>
              <div className="line">
                <h2 className="headline text-thin text-s-size-30">Totally <span className="text-primary">Healthy</span> Meals</h2>
                <p className="text-size-20 text-s-size-16 text-thin">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                <i className="icon-more_node_links icon2x text-primary margin-top-bottom-10"></i>
              </div>  
            </div>  
          </section>
         );
    }
}
 
export default ImageBnnaer;