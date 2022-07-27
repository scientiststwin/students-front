import React, { useId } from "react";
import Classes from "./inputForm.module.css";
import PropTypes from "prop-types";

const InputForm = (props) => {
  const id = useId();

  return (
    <div className={Classes.main}>
      <label htmlFor={id}>{props.label}</label>
      <input
        id={id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputForm;

InputForm.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["number", "text"]),
  onChange: PropTypes.func,
  value: PropTypes.oneOf(["number", "text"]),
};
