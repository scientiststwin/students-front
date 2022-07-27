import React from "react";
import User from "./user/user";
import PropTypes from "prop-types";
import Classes from "./userList.module.css";

const UserList = (props) => {
  return (
    <div className={Classes.main}>
      {props.users.map((user) => (
        <User
          key={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          age={user.age}
        />
      ))}
    </div>
  );
};

export default UserList;

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.number,
    })
  ),
};
