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
              <h1 className="text-thin">{this.props.name}</h1>
              <h2>Category: {this.props.category}</h2> 
              <div style={{display:"flex", justifyContent:"space-between"}}>
              <p style={{marginTop:"11px"}}>Calores: {this.props.calories}</p>
              <a className=" text-primary-hover" href={"/details/"+this.props.id}>Read more <i className="fa fa-angle-right icon" aria-hidden="true"></i></a> 
              </div>               
            </div>
         );
    }
}
 
export default MealPlanCard;