import React from "react";
import NavBar from "../../NavbarComponent/NavBar";
import styles from "./CreateTask.module.css";
import FormInput from "../Form";

export default function CreateTask(props) {
  return (
    <>
      <NavBar />
      <FormInput></FormInput>
    </>
  );
}
