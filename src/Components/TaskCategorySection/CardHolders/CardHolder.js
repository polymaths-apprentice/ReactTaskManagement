import styles from "./CardHolder.module.css";
import TaskCard from "../TaskCard/TaskCard";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import TaskDataRepository from "../../../Repositories/TaskDataRepository";

export default function CardHolder({ category }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasksForCategory();
  }, []);

  const fetchTasksForCategory = async () => {
    const tasksData = await TaskDataRepository.getTasksByCategory(category.id);
    setTasks(tasksData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{category.name}</h2>
        <hr className={styles.separator} />
        <div className={styles.scrollableContainer}>
          <div className={styles.buttonList}>
            {tasks.map((task) => (
              <TaskCard key={task.id} taskObj={task} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

CardHolder.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
