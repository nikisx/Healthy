import { Form, Formik } from "formik";
import * as Yup from 'yup';
import CustomSelect from "../shared/CustomSelect";
import CustomTextArea from "../shared/CustomTextArea";
import CustomTextInput from "../shared/CustomTextInput";
const AddMeal = () => {
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
                            img:'',
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string().min(3, 'At least 3 characters').max(15, 'Max 15 characters').required('Required'),
                            description: Yup.string().min(10, 'At least 10 characters').max(1000, 'Max 1000 characters').required('Required'),
                            category: Yup.string().oneOf(['vegan', 'meat', 'vegatarian']).required("Required"),
                            calories: Yup.number().min(30,'Calories must be at least 30').max(1000, 'Calories can be max 1000').required("Required"),
                            img: Yup.string()
                            .matches(
                                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                                'Enter correct url!'
                            ).required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            //service
                            setTimeout(() => {
                                console.log(JSON.stringify(values));
                                resetForm();
                                setSubmitting(false);
                            }, 3000)

                        }}
                    >
                        {props => (
                            <Form>
                                <h1>Create a Meal</h1>
                                <CustomTextInput label="Name" name="name" type="text" placeholder="Meal Name" />
                                <CustomTextInput label="Calories" name="calories" type="number" placeholder="Calories" />
                                <CustomTextArea label="Description"  name="description" />
                                <CustomSelect label="Category" name="category">
                                    <option>Select category</option>
                                    <option value="meat">Meat</option>
                                    <option value="vegan">Vegan</option>
                                    <option value="vegatarian">Vegatarian</option>
                                </CustomSelect>
                                <CustomTextInput label="Image" name="img" type="text" placeholder="Image" />
                                <button type="submit">{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
}

export default AddMeal;