import React, { Component } from 'react';
import * as mealPlansService from '../../services/mealPlansService'
import MealPlanCard from './MealPlanCard/MealPlanCard';
class MealPlansContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mealPlans: []
         }
    }

    componentDidMount() {
        mealPlansService.getAll()
            .then(res => this.setState({mealPlans: res.sort(function(){return .5 - Math.random()}).slice(0,3)})) 
    }
    
    render() { 
        return ( 
            <section className="section background-white"> 
        <div className="line">
          <div className="margin">
            {this.state.mealPlans.length ===0 ? <p className="three-quarters-loader">Loading...</p> :this.state.mealPlans.map(x=> <MealPlanCard
            key={x.key}
            name={x.name}
            image={x.img}
            id={x.key}
            />)}
          </div>
        </div>
      </section>
         );
    }
}
 
export default MealPlansContainer;