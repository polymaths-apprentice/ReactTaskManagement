import React from "react";
import NavBar from "../../NavbarComponent/NavBar";
import FormInput from "../Form";
import Task from "../../../Models/TaskModel";
import Category from "../../../Models/CategoryModel";

export default function CreateTask(props) {
  const taskObj = new Task(
    "",
    "Task title",
    "Task description",
    "Task Date",
    "Task category",
    "Task status"
  );

  const taskCategory = new Category("", "category");
  return (
    <>
      <NavBar />
      <FormInput taskObj={taskObj} taskCategory={taskCategory}></FormInput>
    </>
  );
}
