import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MealPlanCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // Object.keys(this.props.meals).map(x=> console.log(`${x}-${this.props.meals[x]}`))
        
        // if (this.props.category === "vegan") {
        //     console.log("mathc");
        // }
        // else{
        //     console.log("fail");
        // }
        // console.log(this.props.categoryToFind);
        return ( 
            <Link to={"/details/"+this.props.id}>
            <div style={{width:"450px", margin: "0 20px"}} >
              <img className="margin-bottom" style={{height:"350px", width:"100%"}} src={this.props.image} alt=""/>
              <h1 className="text-thin">{this.props.name}</h1>
              <h2>Category: {this.props.category}</h2> 
              <div style={{display:"flex", justifyContent:"space-between"}}>
              <p style={{marginTop:"11px"}}>Calores: {this.props.calories}</p>
              <div className=" text-primary-hover" >Read more <i className="fa fa-angle-right icon" aria-hidden="true"></i></div> 
              </div>               
            </div>
            </Link>
         );
    }
}
 
export default MealPlanCard;