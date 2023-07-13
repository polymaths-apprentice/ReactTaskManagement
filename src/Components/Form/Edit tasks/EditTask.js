import React, { useEffect } from "react";
import NavBar from "../../NavbarComponent/NavBar";
import styles from "./EditTask.module.css";
import FormInput from "../Form";

export default function EditTask(props) {
  return (
    <>
      <NavBar />

      <FormInput></FormInput>
    </>
  );
}
