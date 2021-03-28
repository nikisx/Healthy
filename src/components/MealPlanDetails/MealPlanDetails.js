import {useEffect, useState} from 'react';
import * as mealPlanService from '../../services/mealPlansService'
import './MealPlanDetails.css'
const MealPlanDetails = ({match}) => {

    let [mealPlan, setMealPlan] = useState({});
    let [mealPlanReady, setMealPlanReady] = useState(false);

    useEffect(() => {
        mealPlanService.getDetails(match.params.id)
        .then(res => setMealPlan(res))
    }, []);

    // if (Object.keys(mealPlan).length !== 0 && mealPlan.constructor === Object) {
    //     setMealPlanReady(true) Object.keys(mealPlan.meals).map(x=> `${<p>{x}</p>} - ${<p>{mealPlan.meals[x]}</p>}`)
       
    //     return;
    // }
    if (Object.keys(mealPlan).length !== 0 && mealPlan.constructor === Object) {
        return(
            <div className="section background-white">
        <section className="first-part ">
            <h1>{mealPlan.name}</h1>
            <img src={mealPlan.img} style={{width:"350px"}} alt=""/>
        </section>
        <hr className="cool-hr"/>
        <section className="info">
            <div>
                <h1>Ingredients</h1>
                {mealPlan.ingridients.map(x=>  <p key={x} className="ingridient">{x}</p>)}
            </div>
            
                
                <div className="description">
                    <h1>How to cook</h1>
                    <p>{mealPlan.description}</p>
                </div>
           
        </section>

        <div className="buttons">
            <button className="form-btn">Edit</button>
            <button className="form-btn">Delete</button>
        </div>
    </div>
        )
    } else {
        
        return ( 
            <div className="section background-white">
                <p style={{position:"relative", left:"49%", marginTop: "3%"}} className="three-quarters-loader">Loading...</p>
            </div>
         );
    }
}
 
export default MealPlanDetails;