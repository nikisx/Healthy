import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        let countMealPlans = this.props.take
        if (countMealPlans !== undefined) {
            mealPlansService.getAll()
                .then(res => this.setState({ mealPlans: res.sort(function () { return .5 - Math.random() }).slice(0, countMealPlans) }))
        }
        else {
            mealPlansService.getAll()
                .then(res => this.setState({ mealPlans: res }))
        }
    }

    render() {
        return (
            <section className="section background-white">
                {this.props.take === undefined ? <h2 style={{ marginTop:"50px", textAlign:"center"}} className="headline text-thin text-s-size-30">Our <span className="text-primary">Meal</span> Plans</h2> : ""}
                <div className="line">
                    <div className="margin home-page-meals">
                        {this.state.mealPlans.length === 0 ? <p className="three-quarters-loader">Loading...</p> : this.state.mealPlans.map(x => <MealPlanCard
                            key={x.key}
                            name={x.name}
                            image={x.img}
                            id={x.key}
                            category={x.category}
                            calories={x.calories}
                            meals={x.meals}
                        />)}
                    </div>
                </div>
            </section>
        );
    }
}

export default MealPlansContainer;