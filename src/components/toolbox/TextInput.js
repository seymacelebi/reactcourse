import React from "react"

const TextInput = ({name, label, onChange, placeHolder, value, error}) => {
    let wrapperClass = "form-group"
    if (error&& error.length>0 ) {
        wrapperClass +=" has-error"
        
    }
}
export default TextInput;