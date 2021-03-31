import { useField } from "formik"
const CustomTextArea = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (  
        <>
            <label htmlFor={props.name}>{label}</label>
            <textarea {...field} {...props}/>
            {meta.touched && meta.error ? (<div>{meta.error}</div>): null}
        </>
    );
}
 
export default CustomTextArea;