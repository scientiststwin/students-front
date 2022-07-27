import React from "react";
import Classes from "./home.module.css";
import Dropdown from "../../componenets/dropdown/dropdown";
import UserList from "../../componenets/userList/userList";

const Home = () => {
  const options = ["America", "Georgia", "Iraq", "Armnia", "lebanan"];
  const users = [
    { id: 1, first_name: "ilia", last_name: "gurgenidze", age: 22 },
    { id: 2, first_name: "ivan", last_name: "gurgenidze", age: 25 },
    { id: 3, first_name: "dom", last_name: "twislku", age: 30 },
  ];
  return (
    <div className={Classes.main}>
      <h1>See students</h1>

      <div className={Classes.users}>
        <Dropdown options={options} />
        <UserList users={users} />
      </div>
    </div>
  );
};

export default Home;
