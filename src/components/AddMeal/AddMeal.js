import { Form, Formik } from "formik";
import * as Yup from 'yup';
import CustomTextInput from "../shared/CustomTextInput";
const AddMeal = () => {
    return (
        <section className="section background-white">
            <div className="line">
                <div style={{marginTop:"100px"}}>
                    <Formik
                        initialValues={{
                            name: '',
                            description: '',
                            category: '',
                            calories: 0,
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string().min(3, 'At least 3 characters').max(25, 'Max 25 characters').required('Required'),
                            description: Yup.string().min(10, 'At least 10 characters').max(100, 'Max 100 characters').required('Required'),
                            category: Yup.string().oneOf(['Vegan', 'Meat', 'Vegatarian']).required(),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            //service
                            console.log(values);
                            resetForm();
                            setSubmitting(false);
                        }}
                    >
                        {props => (
                             <Form>
                             <h1>Create a Meal</h1>
                             <CustomTextInput label="Name" name="name" type="text" placeholder="Meal Name"/>
                         </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
}

export default AddMeal;