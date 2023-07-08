import { useState } from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className="input">
      <input
        className={"input " + props.className}
        id={props.id}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default Input;
