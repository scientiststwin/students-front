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
          first_name={user.first_name}
          last_name={user.last_name}
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
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      age: PropTypes.number,
    })
  ),
};
