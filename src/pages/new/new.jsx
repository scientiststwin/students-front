import React, { useState } from "react";
import InputForm from "../../componenets/inputFrom/inputForm";
import SubmitButton from "../../componenets/submitButton/submitButton";
import Classes from "./new.module.css";

const New = () => {
  const [student, setStudent] = useState();

  const inputHandler = (key) => (event) =>
    setStudent((pre) => ({ ...pre, [key]: event.target.value }));

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(student);
  };

  return (
    <div className={Classes.main}>
      <h1>Add a new Student</h1>
      <form className={Classes.form} onSubmit={onSubmitHandler}>
        <InputForm onChange={inputHandler("id")} label="id" type="number" />
        <InputForm onChange={inputHandler("age")} label="age" type="number" />
        <InputForm
          onChange={inputHandler("first name")}
          label="first name"
          type="text"
        />
        <InputForm
          onChange={inputHandler("last name")}
          label="last name"
          type="text"
        />
        <InputForm
          onChange={inputHandler("nationality")}
          label="nationality"
          type="text"
        />

        <SubmitButton />
      </form>
    </div>
  );
};

export default New;
