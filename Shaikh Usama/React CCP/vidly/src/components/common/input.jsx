import React from "react";

const Input = ({ type, name, label, value, errors, onChange }) => {
  // console.log(errors);
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        type={type}
        className="form-control"
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
