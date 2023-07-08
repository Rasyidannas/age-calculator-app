import "./Button.css";

const Button = (props) => {
  return (
    <button type={props.type} className={"button " + props.className}>
      {props.text}
      <img src={props.src}></img>
    </button>
  );
};

export default Button;
