import Logo from "./Logo/Logo";
// import TasksData from "./TasksData/TasksData";
import styles from "./TaskInformation.module.css";
import Container from "react-bootstrap/esm/Container";
import { useState, useEffect } from "react";

export default function TaskInformation() {
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
          {/* <TasksData key={index} {...data} /> */}
        </div>
        {showLogo && <Logo />}
      </div>
    </Container>
  );
}
