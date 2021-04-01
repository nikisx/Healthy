import { useField } from "formik"
const CustomSelect = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (  
        <>
        
            {/* <label htmlFor={props.name}>{label}</label> */}
            <select className="select-box form-input"  {...field} {...props}/>
            {meta.touched && meta.error ? (<div className="error">{meta.error}</div>): null}
        </>
    );
}
 
export default CustomSelect;