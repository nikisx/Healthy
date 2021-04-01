import { useField } from "formik"
import TextField from '@material-ui/core/TextField';
import { Fragment } from "react";

const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (  
        <>
            {/* <label htmlFor={props.name}>{label}</label> */}
            <TextField id="outlined-basic" label={label} variant="outlined" {...field} {...props} />
            {meta.touched && meta.error ? (<div className="error form-input">{meta.error}</div>): null}
        </>
    );
}
 
export default CustomTextInput;