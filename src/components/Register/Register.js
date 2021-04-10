import { Form, Formik, FieldArray, Field } from "formik";
import * as Yup from 'yup';
import CustomSelect from "../shared/CustomSelect";
import CustomTextArea from "../shared/CustomTextArea";
import CustomTextInput from "../shared/CustomTextInput";
import { auth } from '../../utils/firebase';
import { Link } from "react-router-dom";


const Register = ({history}) => {

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
                            email: Yup.string().email('Must be a valid email').required('Required'),
                            password: Yup.string().min(6, 'At least 6 characters').required('Required'),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            //service
                            setTimeout(() => {
                                auth.createUserWithEmailAndPassword(values.email, values.password);
                                resetForm();
                                setSubmitting(false);
                                history.push('/login')
                            }, 2000)

                        }}
                    >
                        {props => (
                            <Form className="add-form">
                                <h2 style={{ marginTop:"50px", textAlign:"center"}} className="headline text-thin text-s-size-30">Create <span className="text-primary">An</span> Account</h2>
                                <CustomTextInput className="form-input" label="Email" name="email" type="email" />
                                <CustomTextInput className="form-input" label="Password" name="password" type="password" />
                                <button className="submit form-button" type="submit">{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
                                <p style={{marginLeft:"66%", marginTop:"-74px"}}>Already have an account ? <Link to="/login" className="text-primary">Login</Link></p>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
}

export default Register;