import React from 'react';
import './Input.css'

function Input({
    type,
    className = '',
    name,
    placeholder,
    label,
    defaultValue,
    register,  /* de validaciones */
    error,  /* de validaciones */
    validation
}){
    return (
        <div className={`mb-3 ${className}`}>
            <label className="d-block form-label w-100">
                {label ? label : ''}

            <input
            type = {type}
            name = {name}
            placeholder = {placeholder}
            defaultValue = {defaultValue}
            className = {`form control w-100 mt-2 ${error ? 'is-invalid' : 'is-valid'}`}
            {...register(name, validation)}
            autoComplete="off"
            autoCorrect="off"
            />

            </label>
            {error ? <p className="text-danger">{error.message}</p> : null}
        </div>

        
    )
}

export default Input;