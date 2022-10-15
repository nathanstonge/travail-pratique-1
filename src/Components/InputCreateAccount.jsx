import React from "react";

function InputCreateAccount(props) {
  return (
    <div className="row mb-4">
      <div className="col-5">
        <label>{props.title}: </label>
      </div>
      <div className="col">
        <input
          onChange={props.method}
          value={props.value}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          required
        />
      </div>
    </div>
  );
}

export default InputCreateAccount;
