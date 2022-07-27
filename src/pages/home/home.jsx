import React, { useEffect, useState } from "react";
import Classes from "./home.module.css";
import Dropdown from "../../componenets/dropdown/dropdown";
import UserList from "../../componenets/userList/userList";
import { getNationalities, getstudents } from "../../api/student";
import Button from "../../componenets/button/button";

const Home = () => {
  const [nationalities, setNationalities] = useState([]);
  const [selectedNationality, setSelectedNationality] = useState(null);
  const [sort, setSort] = useState(undefined);
  const [users, setUsers] = useState([]);

  const retieriveNationalities = () => {
    getNationalities().then((response) => setNationalities(response.data));
  };

  const retieriveUsers = () =>
    getstudents(selectedNationality, sort).then((response) =>
      setUsers(response.data)
    );

  const onNationalityHandler = (name) => setSelectedNationality(name);

  const onSortHandler = () => {
    setSort((preSort) => {
      if (preSort) return -1 * preSort;
      return 1;
    });
  };

  useEffect(() => {
    retieriveNationalities();
  }, []);

  useEffect(() => {
    if (onNationalityHandler) retieriveUsers();
  }, [selectedNationality, sort]);

  return (
    <div className={Classes.main}>
      <h1>See students</h1>

      <div className={Classes.users}>
        <Button text="Sort" onClick={onSortHandler} />
        <Dropdown onChange={onNationalityHandler} options={nationalities} />
        <UserList users={users} />
      </div>
    </div>
  );
};

export default Home;
