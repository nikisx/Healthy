import { useField } from "formik"
const CustomTextArea = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (  
        <>
            <label htmlFor={props.name}>{label}</label>
            <textarea className="custom-textarea" rows="10" {...field} {...props}/>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>): null}
        </>
    );
}
 
export default CustomTextArea;