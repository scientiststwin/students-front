import React from "react";
import PropTypes from "prop-types";
import Classes from "./user.module.css";

const User = (props) => {
  return (
    <div className={Classes.main}>
      <div>{props.first_name}</div>
      <div>{props.last_name}</div>
      <div>({props.age})</div>
    </div>
  );
};

export default User;

User.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  age: PropTypes.number,
};
