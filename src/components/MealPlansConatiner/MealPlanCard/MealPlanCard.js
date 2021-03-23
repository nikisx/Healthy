import React, { Component } from 'react';

class MealPlanCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="s-12 m-12 l-4 margin-m-bottom">
              <img className="margin-bottom" style={{height:"350px"}} src={this.props.image} alt=""/>
              <h2 className="text-thin">{this.props.name}</h2>
              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p> 
              <a className="text-more-info text-primary-hover" href={"/details/"+this.props.id}>Read more</a>                
            </div>
         );
    }
}
 
export default MealPlanCard;