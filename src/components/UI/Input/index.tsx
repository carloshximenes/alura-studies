import React from "react";
import InputModel from "../../../models/InputModel";
import classes from "./input.module.scss";

const Input = React.forwardRef<HTMLInputElement, InputModel>((props, ref) => {
    const { id, label, placeholder, required, type, step, min, max } = props;

    return (
        <div className={classes.inputContainer}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                name={id}
                id={id}
                placeholder={placeholder}
                step={step}
                min={min}
                max={max}
                required={required}
                ref={ref}
            />
        </div>
    );
});

export default Input;
