import styles from "./CardHolder.module.css";
import React from "react";
import TaskCard from "../Card/TaskCard";

import { useState, useEffect } from "react";
export default function CardHolder({ category }) {
  const [tasks, setTasks] = useState([]);
  const [categoryObj, setCategoryObj] = useState([]);

  useEffect(() => {
    fetchTasksForCategory();
    fetchCategoryName();
  }, []);

  const fetchTasksForCategory = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/tasks/category/${category.id}`
      );
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error(`Error fetching tasks for category ${category.id}:`, error);
    }
  };

  const fetchCategoryName = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/categories/${category.id}`
      );
      const data = await response.json();

      setCategoryObj(data);
    } catch (error) {
      console.log("Error fetching category");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{category.name}</h2>
        <hr className={styles.separator} />
        <div className={styles.scrollableContainer}>
          <div className={styles.buttonList}>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} category={categoryObj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
