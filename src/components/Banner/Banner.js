import React, { Component } from 'react'; 

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className="section background-primary text-center">
            <div className="line">
              <div className="s-12 m-10 l-8 center">
                <h2 className="headline text-thin text-s-size-30">{this.props.heading}</h2>
                <p className="text-size-20">{this.props.text}</p>
              </div>
            </div>  
          </section>
         );
    }
}
 
export default Banner;