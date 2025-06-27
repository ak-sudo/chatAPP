import React from "react";

const Input = ({ type, placeholder, value, onChange, className, label, Name, isRequired, divclass }) => {
  return (
    <>
    <div className={divclass}>

        <label className="block pl-3" for={Name}>{label}</label>
        <input
        id={Name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`p-1 m-2 border border-gray-300 focus:outline-none   ${className}`}
        required={isRequired}
        />

    </div>
    </>
  );
}   

export default Input;