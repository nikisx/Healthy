import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as mealPlanService from '../../services/mealPlansService'
import MealPlanCard from "../MealPlansConatiner/MealPlanCard/MealPlanCard";
import UserContext from '../Context/UserContext';
import { useContext } from 'react';

const MyMeals = () => {
    const [meals, setMeals] = useState([]);

    const context = useContext(UserContext);

    useEffect(() => {
        mealPlanService.getAll()
            .then(res => setMeals(res))
    }, [meals]);

    return ( 
        <section className="section background-white">
        <h2 style={{ marginTop:"50px", textAlign:"center"}} className="headline text-thin text-s-size-30">Your <span className="text-primary">Meal</span> Plans</h2>
        <div className="line">
            <Link className="add-btn" to="/add"><span style={{fontWeight:"bold", fontSize:"36px"}}>+</span> Add</Link>
            <div style={{display:"flex", flexWrap:"wrap"}}>
                {meals.length === 0 ?
                 <p style={{ position: "relative", left: "49%", marginTop: "3%" }} className="three-quarters-loader">Loading...</p> : 
                 meals?.sort().reverse().map(x  => x.userId === context.id ? <MealPlanCard
                    key={x.key}
                    name={x.name}
                    image={x.img}
                    id={x.key}
                    category={x.category}
                    calories={x.calories}
                    meals={x.meals}
                /> : "")}
            </div>
        </div>
    </section>
     );
}
 
export default MyMeals;