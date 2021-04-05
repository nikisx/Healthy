import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as mealPlanService from '../../services/mealPlansService'
import './MealPlanDetails.css';
import { confirmAlert } from 'react-confirm-alert';
const MealPlanDetails = ({ match, history }) => {

    let [mealPlan, setMealPlan] = useState({});

    useEffect(() => {
        mealPlanService.getDetails(match.params.id)
            .then(res => setMealPlan(res))
    }, []);

    // if (Object.keys(mealPlan).length !== 0 && mealPlan.constructor === Object) {
    //     setMealPlanReady(true) Object.keys(mealPlan.meals).map(x=> `${<p>{x}</p>} - ${<p>{mealPlan.meals[x]}</p>}`)

    //     return;
    // }
    const submit = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="modal-page">
                        <a href="#" onClick={onClose} style={{color:"white", fontWeight:"bold", marginLeft:"97%", fontSize:"25px"}}>X</a>

                        <div className='custom-modal'>
                            <h1 className="modal-header">Are you sure?</h1>
                            <h2 style={{color:"white"}}>You want to delete this meal?</h2>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                            <button className="form-btn del" onClick={onClose}>No</button>
                            <button className="form-btn"
                                onClick={async () => {
                               await mealPlanService.deleteMeal(match.params.id);
                                    history.push('/categories/all');
                                    onClose();
                                }}
                            >
                                Yes
        </button>
                            </div>
                           
                        </div>
                    </div>
                );
            },
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('Click Yes')
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };

    if (Object.keys(mealPlan).length !== 0 && mealPlan.constructor === Object) {
        return (
            <div className="section background-white">
                <section className="first-part ">
                    <h1>{mealPlan.name}</h1>
                    <img src={mealPlan.img} style={{ width: "350px" }} alt="" />
                </section>
                <hr className="cool-hr" />
                <section className="info">
                    <div>
                        <h1>Ingredients</h1>
                        {mealPlan.ingridients?.map(x => <p key={x} className="ingridient">{x}</p>)}
                    </div>


                    <div className="description">
                        <h1>How to cook</h1>
                        <p>{mealPlan.description}</p>
                    </div>

                </section>

                <div className="buttons">
                    <Link to={"/edit/" + match.params.id} className="form-btn">Edit</Link>
                    <a href="#" className="form-btn del" onClick={submit}>Delete</a>
                </div>
            </div>
        )
    } else {

        return (
            <div className="section background-white">
                <p style={{ position: "relative", left: "49%", marginTop: "3%" }} className="three-quarters-loader">Loading...</p>
            </div>
        );
    }
}

export default MealPlanDetails;