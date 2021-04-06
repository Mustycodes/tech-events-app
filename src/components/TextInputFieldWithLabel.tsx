import React from "react";
import {TextInputFieldWithLabelProps} from '../shared/types/types'


const TextInputFieldWithLabel = ({ id, type="text", label, value, onChange, isFieldActive }: TextInputFieldWithLabelProps) => {
  const labelClass = `input-label ${isFieldActive ? "Active": ""}`;
  return (
    <>
      <input id={id} type={type} name={id} value={value} onChange={onChange} className="input-field" />
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
    </>
  );
};

export default TextInputFieldWithLabel;
