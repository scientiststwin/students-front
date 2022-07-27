import React from "react";
import PropTypes from "prop-types";
import Classes from "./user.module.css";

const User = (props) => {
  return (
    <div className={Classes.main}>
      <div>{props.firstName}</div>
      <div>{props.lastName}</div>
      <div>({props.age})</div>
    </div>
  );
};

export default User;

User.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
};
