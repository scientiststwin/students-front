import React, { useEffect } from "react";
import classes from "./dropdown.module.css";
import PropTypes from "prop-types";
import useDeepCompareEffect from "use-deep-compare-effect";

const Dropdown = (props) => {
  const onSelectHandler = (item) => {
    const value = item.target.value;
    props.onChange(value);
  };

  useDeepCompareEffect(() => {
    const firstOption = props?.options?.[0]?.name;
    if (firstOption) props.onChange(firstOption);
  }, [props.options]);

  return (
    <div className={classes.main}>
      <select onChange={onSelectHandler}>
        {props.options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
};
