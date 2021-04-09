import React from "react";
import { TextInputFieldWithLabelProps } from "../shared/types/types";

const TextInputFieldWithLabel = ({
  id,
  type = "text",
  label,
  value,
  onChange,
  isFieldActive,
  onBlur
}: TextInputFieldWithLabelProps) => {
  const labelClass = ` block input-label ${isFieldActive ? "Active" : ""}`;
  return (
    <>
      <input
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="input-field"
        required
      />
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
    </>
  );
};

export default TextInputFieldWithLabel;
