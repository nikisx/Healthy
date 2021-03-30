import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as mealPlansService from '../../services/mealPlansService'
import FilterNav from '../FilterNav/FilterNav';
import MealPlanCard from './MealPlanCard/MealPlanCard';
class MealPlansContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mealPlans: [],
            categoryToFind:"all",
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

    componentDidUpdate(prevProps) {
            try {
                const currCategory = this.props.match.params.category;
                //  console.log(prevProps.match.params.category);
                if (prevProps.match.params.category == currCategory) {
                    return;
                }
                this.setState({categoryToFind:this.props.match.params.category})
                
                // console.log(this.state.categoryToFind);
            } catch (error) {
                
            }
    
    }

    render() {
       if (this.state.categoryToFind === "all") {
        return (
            <section className="section background-white">
                {this.props.take === undefined ? <h2 style={{ marginTop:"50px", textAlign:"center"}} className="headline text-thin text-s-size-30">Our <span className="text-primary">Meal</span> Plans</h2> : ""}
                <div className="line">
                    {this.props.take === undefined ? <><FilterNav/> <Link className="add-btn" to="/add"><i class="fa fa-plus" aria-hidden="true"></i>Add</Link></> : ""}
                    <div className="margin home-page-meals">
                        {this.state.mealPlans.length === 0 ?
                         <p className="three-quarters-loader">Loading...</p> : 
                         this.state.mealPlans.map(x  =>  <MealPlanCard
                            key={x.key}
                            name={x.name}
                            image={x.img}
                            id={x.key}
                            category={x.category}
                            calories={x.calories}
                            meals={x.meals}
                            categoryToFind={this.state.categoryToFind}
                        /> )}
                    </div>
                </div>
            </section>
        );
       }
       else{
        return(
            <section className="section background-white">
            {this.props.take === undefined ? <h2 style={{ marginTop:"50px", textAlign:"center"}} className="headline text-thin text-s-size-30">Our <span className="text-primary">Meal</span> Plans</h2> : ""}
            <div className="line">
                {this.props.take === undefined ? <><FilterNav/> <Link className="add-btn" to="/add"><i class="fa fa-plus" aria-hidden="true"></i>Add</Link></> : ""}
                <div className="margin home-page-meals">
                    {this.state.mealPlans.length === 0 ?
                     <p className="three-quarters-loader">Loading...</p> : 
                     this.state.mealPlans.map(x  => x.category === this.state.categoryToFind ? <MealPlanCard
                        key={x.key}
                        name={x.name}
                        image={x.img}
                        id={x.key}
                        category={x.category}
                        calories={x.calories}
                        meals={x.meals}
                        categoryToFind={this.state.categoryToFind}
                    /> : "")}
                </div>
            </div>
        </section>
        )
       } 
    }
}

export default MealPlansContainer;