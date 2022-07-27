import React from "react";
import classes from "./dropdown.module.css";
import PropTypes from "prop-types";

const Dropdown = (props) => {
  const onSelectHandler = (item) => {
    const value = item.target.value;
    props.onChange(value);
  };

  return (
    <div className={classes.main}>
      <select onChange={onSelectHandler}>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};
