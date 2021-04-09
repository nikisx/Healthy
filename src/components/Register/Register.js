import { Form, Formik, FieldArray, Field } from "formik";
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
                            email: '',
                            password: '',
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string().required('Required'),
                            password: Yup.string().min(6, 'At least 6 characters').required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            //service
                            setTimeout(() => {
                                console.log(values);
                                resetForm();
                                setSubmitting(false);
                            }, 2000)

                        }}
                    >
                        {props => (
                            <Form className="add-form">
                                <h2 style={{ marginTop:"50px", textAlign:"center"}} className="headline text-thin text-s-size-30">Create <span className="text-primary">An</span> Account</h2>
                                <CustomTextInput className="form-input" label="Email" name="email" type="email" />
                                <CustomTextInput className="form-input" label="Pass" name="password" type="password" />
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