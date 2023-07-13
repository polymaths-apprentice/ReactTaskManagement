import styles from "./CardHolder.module.css";
import React from "react";
import TaskCard from "../Card/TaskCard";
export default function CardHolder() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Button List</h2>
        <hr className={styles.separator} />
        <div className={styles.scrollableContainer}>
          <div className={styles.buttonList}>
            <TaskCard></TaskCard>
          </div>
        </div>
      </div>
    </div>
  );
}
