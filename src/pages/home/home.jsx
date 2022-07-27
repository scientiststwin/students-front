import React, { useEffect, useState } from "react";
import Classes from "./home.module.css";
import Dropdown from "../../componenets/dropdown/dropdown";
import UserList from "../../componenets/userList/userList";
import { getNationalities, getstudents } from "../../api/student";

const Home = () => {
  const [nationalities, setNationalities] = useState([]);
  const [selectedNationality, setSelectedNationality] = useState(null);
  const [users, setUsers] = useState([]);

  const retieriveNationalities = () => {
    getNationalities().then((response) => setNationalities(response.data));
  };

  const selectNationality = (name) => {
    setSelectedNationality(name);
  };

  useEffect(() => {
    retieriveNationalities();
  }, []);

  useEffect(() => {
    if (selectNationality)
      getstudents(selectedNationality).then((response) =>
        setUsers(response.data)
      );
  }, [selectedNationality]);

  // const users = [
  //   { id: 1, first_name: "ilia", last_name: "gurgenidze", age: 22 },
  //   { id: 2, first_name: "ivan", last_name: "gurgenidze", age: 25 },
  //   { id: 3, first_name: "dom", last_name: "twislku", age: 30 },
  // ];

  return (
    <div className={Classes.main}>
      <h1>See students</h1>

      <div className={Classes.users}>
        <Dropdown onChange={selectNationality} options={nationalities} />
        <UserList users={users} />
      </div>
    </div>
  );
};

export default Home;
