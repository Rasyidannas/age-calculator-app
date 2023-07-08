import "./Label.css";

const Label = (props) => {
  return (
    <label htmlFor={props.htmlFor} className={"label " + props.className}>
      {props.textLabel}
    </label>
  );
};

export default Label;
