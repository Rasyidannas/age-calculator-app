import Label from "./Label";
import Input from "./Input";
import "./TextField.css";

const TextField = (props) => {
  return (
    <div
      className={`text-field ${
        props.isValid === false ? "text-field--err" : ""
      }`}
    >
      <Label textLabel={props.textLabel} htmlFor={props.htmlFor} />
      <Input
        className="input-text"
        id={props.id}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {props.isValid === true && <span className="hint">{props.hint}</span>}

      {/* error message */}
      {props.isValid === false && (
        <span className="err-message">{props.errMessage}</span>
      )}
    </div>
  );
};

export default TextField;
