import {useEffect, useState} from 'react';
import * as mealPlanService from '../../services/mealPlansService'
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
    
    return ( 
        <>
        <h1>{mealPlan.name}</h1>
        {Object.keys(mealPlan).length !== 0 && mealPlan.constructor === Object ? 
         Object.keys(mealPlan.meals).map(x=> <div><p>{x}</p> - <p>{mealPlan.meals[x]}</p></div>) :
          ""}
        </>
     );
}
 
export default MealPlanDetails;