import { Form, Formik, FieldArray, Field } from "formik";
import * as Yup from 'yup';
import CustomSelect from "../shared/CustomSelect";
import CustomTextArea from "../shared/CustomTextArea";
import CustomTextInput from "../shared/CustomTextInput";
import './AddMeal.css'
import * as mealService from '../../services/mealPlansService'
import UserContext from '../Context/UserContext';
import { useContext } from 'react';

const AddMeal = () => {

    const context = useContext(UserContext);

    return (
        <section className="section background-white">
            <div className="line">
                <div style={{ marginTop: "100px" }}>
                    <Formik
                        initialValues={{
                            name: '',
                            description: '',
                            category: '',
                            calories: 0,
                            img: '',
                            ingridients: [],
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string().min(3, 'At least 3 characters').max(75, 'Max 75 characters').required('Required'),
                            description: Yup.string().min(10, 'At least 10 characters').required('Required'),
                            category: Yup.string().oneOf(['vegan', 'meat', 'vegetarian']).required("Required"),
                            calories: Yup.number().min(30, 'Calories must be at least 30').max(1000, 'Calories can be max 1000').required("Required"),
                            img: Yup.string()
                                .matches(
                                    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                                    'Enter correct url!'
                                ).required('Required'),
                            // ingridient:Yup.string().min(6, 'Ingridient and quantity must be at least 6 characters').max(20, 'Ingridient and quantity must be at least 20 characters')

                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            //service
                            setTimeout(() => {
                                Object.assign(values, {userId: context.id})
                                mealService.createMeal(values)
                                resetForm();
                                setSubmitting(false);
                            }, 2000)

                        }}
                    >
                        {props => (
                            <Form className="add-form">
                                <h2 style={{ marginTop:"50px", textAlign:"center"}} className="headline text-thin text-s-size-30">Create <span className="text-primary">A</span> Meal</h2>
                                <CustomTextInput className="form-input" label="Name" name="name" type="text" />
                                <CustomTextInput className="form-input" label="Calories" name="calories" type="number" />
                                <CustomTextArea className="form-input" label="Description" name="description" />
                                <CustomSelect label="Category" name="category">
                                    <option>Select category</option>
                                    <option value="meat">Meat</option>
                                    <option value="vegan">Vegan</option>
                                    <option value="vegetarian">Vegetarian</option>
                                </CustomSelect>
                                <CustomTextInput  className="form-input" label="Image" name="img" type="text" />
                                <h2>Ingridients</h2>
                                <FieldArray className="form-input" name='ingridients' render={arrayHelpers => (
                                    <div>
                                        {props.values.ingridients && props.values.ingridients.length > 0 ? (
                                            props.values.ingridients.map((ingridient, index) => (
                                                <div key={index}>
                                                    <Field className = "ingr-field" name={`ingridients.${index}`} />
                                                    <button className="add-remove-btn"
                                                        type="button"
                                                        onClick={() => arrayHelpers.remove(index)} // remove a ingridient from the list
                                                    >
                                                        -
                      </button>
                                                    { props.values.ingridients.length - 1 === index && <button
                                                        type="button"
                                                        className="add-remove-btn"
                                                        onClick={() => arrayHelpers.push("")} // insert an empty string at a position
                                                    >
                                                        +
                      </button>}
                                                </div>
                                            ))
                                        ) : (
                                            <button className="add-igr" type="button" onClick={() => arrayHelpers.push("")}>
                                                {/* show this when user has removed all ingridients from the list */}
                    Add an ingridient
                                            </button>
                                        )}
                                        <div>
                                        </div>
                                    </div>
                                )}
                                />
                                <button className="submit form-button" type="submit">{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
}

export default AddMeal;