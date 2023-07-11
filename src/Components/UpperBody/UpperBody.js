import Logo from "./Logo/Logo";
import Filters from "./FiltersComponent/Filters";
import TasksData from "./TasksData/TasksData";
import styles from "./UpperBody.module.css";
import Container from "react-bootstrap/esm/Container";
import React, { useState, useEffect } from "react";

export default function UpperBody() {
  const taskData1 = {
    taskDescription: "Task Description",
    taskNumber: 190,
    taskColor: "black",
  };
  const taskData2 = {
    taskDescription: "Task Description2",
    taskNumber: 190,
    taskColor: "green",
  };
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 766) {
        setShowLogo(false);
      } else {
        setShowLogo(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <div className={styles.container2}>
        <div className={styles.taskData}>
          <TasksData {...taskData1} />
          <TasksData {...taskData2} />
          <TasksData {...taskData2} />
          <TasksData {...taskData2} />
        </div>
        {showLogo && <Logo />}
      </div>

      <div className={styles.container3}>
        <Filters></Filters>
      </div>
    </Container>
  );
}
