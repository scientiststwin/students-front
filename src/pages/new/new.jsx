import React, { useState } from "react";
import InputForm from "../../componenets/inputFrom/inputForm";
import SubmitButton from "../../componenets/submitButton/submitButton";
import Classes from "./new.module.css";
import { createStudent } from "../../api/student.js";

const New = () => {
  const initialStudentState = {
    id: 0,
    age: 0,
    firstName: "",
    lastName: "",
    nationality: "",
  };

  const [student, setStudent] = useState(initialStudentState);

  const textInputHandler = (key) => (event) =>
    setStudent((pre) => ({ ...pre, [key]: event.target.value }));

  const numberInputHandler = (key) => (event) =>
    setStudent((pre) => ({ ...pre, [key]: event.target.valueAsNumber }));

  const onSubmitHandler = (event) => {
    event.preventDefault();

    createStudent(student)
      .then((response) => {
        alert("Student was added successfully ");
        setStudent(initialStudentState);
      })
      .catch((error) => alert(error));
  };

  return (
    <div className={Classes.main}>
      <h1>Add a new Student</h1>
      <form className={Classes.form} onSubmit={onSubmitHandler}>
        <InputForm
          value={student.id}
          onChange={numberInputHandler("id")}
          label="id"
          type="number"
        />
        <InputForm
          value={student.age}
          onChange={numberInputHandler("age")}
          label="age"
          type="number"
        />
        <InputForm
          value={student.firstName}
          onChange={textInputHandler("firstName")}
          label="first name"
          type="text"
        />
        <InputForm
          value={student.lastName}
          onChange={textInputHandler("lastName")}
          label="last name"
          type="text"
        />
        <InputForm
          value={student.nationality}
          onChange={textInputHandler("nationality")}
          label="nationality"
          type="text"
        />

        <SubmitButton />
      </form>
    </div>
  );
};

export default New;
