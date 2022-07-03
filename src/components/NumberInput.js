import React, { useState } from "react";

function NumberInput({ labelText, handleChange }) {
    function onChange(e) {
        if (e.target.value === '') {
            return;
        }
        handleChange(e.target.value);
    }


    return (
        <label className="number">
            {labelText}:
            <input onChange={onChange} type="number" name="quantity" min="0" max="10"/>
        </label>
    );
}

export default NumberInput