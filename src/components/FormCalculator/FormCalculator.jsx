import { useReducer, useState } from "react";
import "./FormCalculator.css";
import TextField from "../UI/TextField";
import Button from "../UI/Button";
import ArrowDown from "../../assets/icon-arrow.svg";

const dayReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    //this is for empty
    if (action.val === "") {
      return {
        value: action.val,
        isValid: false,
        errMessage: "This field is required",
      };
    }
    
    //this for less 31 and number only
    if (action.val >= 31 || !action.val.match(/^\d+$/)) {
      return {
        value: action.val,
        isValid: false,
        errMessage: "Must be a valid day",
      };
    }

    return {
      value: action.val,
      isValid: true,
      errMessage: "",
    };
  }
};

const monthReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    if (action.val === "") {
      return {
        value: action.val,
        isValid: false,
        errMessage: "This field is required",
      };
    }

    if (action.val > 12 || !action.val.match(/^\d+$/)) {
      return {
        value: action.val,
        isValid: false,
        errMessage: "Must be a valid month",
      };
    }

    return {
      value: action.val,
      isValid: true,
      errMessage: "",
    };
  }
};

const yearReducer = (state, action) => {
  const date = new Date();
  const currenYear = date.getFullYear();

  if (action.type === "USER_INPUT") {
    if (action.val === "") {
      return {
        value: action.val,
        isValid: false,
        errMessage: "This field is required",
      };
    }

    if (
      action.val < 1899 ||
      action.val > currenYear ||
      action.val == currenYear ||
      !action.val.match(/^\d+$/)
    ) {
      return {
        value: action.val,
        isValid: false,
        errMessage: "Must be in the past start from 1900",
      };
    }

    return {
      value: action.val,
      isValid: true,
      errMessage: "",
    };
  }
};

const FormCalculator = (props) => {
  // useState and useReducer
  //check form is true or false
  const [formIsValid, setFormIsValid] = useState(true);

  const [dayState, dispatchDay] = useReducer(dayReducer, {
    value: "",
    isValid: false,
    errMessage: "This field is required",
  });

  const [monthState, dispatchMonth] = useReducer(monthReducer, {
    value: "",
    isValid: false,
    errMessage: "This field is required",
  });

  const [yearState, dispatchYear] = useReducer(yearReducer, {
    value: "",
    isValid: false,
    errMessage: "This field is required",
  });

  // Handler
  const dayChangHandler = (event) => {
    dispatchDay({ type: "USER_INPUT", val: event.target.value });
  };

  const monthChangHandler = (event) => {
    dispatchMonth({ type: "USER_INPUT", val: event.target.value });
  };

  const yearChangHandler = (event) => {
    dispatchYear({ type: "USER_INPUT", val: event.target.value });
  };

  //this is for submit form
  const submitCalculatorHandler = (event) => {
    event.preventDefault();

    //this is for input not empty or isvalid = true
    if (dayState.isValid && monthState.isValid && yearState.isValid) {
      const birthdayUser = {
        days: dayState.value,
        months: monthState.value,
        years: yearState.value,
      };

      setFormIsValid(true);

      // this will store data
      return props.onCalculateData(birthdayUser);
    }

    // this is for either field empty
    const birthdayUser = {
      days: "",
      months: "",
      years: "",
    };

    setFormIsValid(false);

    props.onCalculateData(birthdayUser);

    // console.log(formIsValid);
    console.log(dayState);
    console.log(monthState);
    console.log(yearState);
  };

  return (
    <form className="form" onSubmit={submitCalculatorHandler}>
      <div className="form-group">
        <TextField
          value={dayState.value}
          textLabel={"Day"}
          id={"day"}
          htmlFor={"day"}
          placeholder={"DD"}
          onChange={dayChangHandler}
          isValid={formIsValid}
          errMessage={dayState.errMessage}
        />
        <TextField
          value={monthState.value}
          textLabel={"Month"}
          id={"month"}
          htmlFor={"month"}
          placeholder={"MM"}
          onChange={monthChangHandler}
          isValid={formIsValid}
          errMessage={monthState.errMessage}
        />
        <TextField
          value={yearState.value}
          textLabel={"Year"}
          id={"year"}
          htmlFor={"year"}
          placeholder={"YYYY"}
          onChange={yearChangHandler}
          isValid={formIsValid}
          hint={"start from 1900"}
          errMessage={yearState.errMessage}
        />
      </div>

      <Button className="form__button" type={"submit"} src={ArrowDown} />
    </form>
  );
};

export default FormCalculator;
