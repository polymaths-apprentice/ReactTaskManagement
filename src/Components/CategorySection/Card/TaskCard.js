import React, { useState } from "react";
import styles from "./TaskCard.module.css";
import { useNavigate } from "react-router-dom";

import arrowIcon from "../../../Assets/Arrow icon.svg";
import starFilled from "../../../Assets/Star logo colored.svg";
import starNotFilled from "../../../Assets/Star logo un-colored.svg";
import Task from "../../../Models/TaskModel";
import Category from "../../../Models/CategoryModel";

export default function TaskCard({ task, category }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  function handleEdit() {
    const taskId = taskObj.id;
    navigate(`/edit/${taskId}`);
  }

  const taskDate = new Date(task.dueDate).toDateString();

  const taskObj = new Task(
    task.id,
    task.title,
    task.description,
    taskDate,
    task.categoryId,
    task.status
  );

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <button className={styles.favorite}>
          {isFavorite ? (
            <img onClick={handleFavorite} src={starFilled} alt="Logo" />
          ) : (
            <img onClick={handleFavorite} src={starNotFilled} alt="Logo" />
          )}
        </button>

        <button className={styles.logoImage}>
          <img src={arrowIcon} onClick={handleEdit} alt="Logo" />
        </button>
      </div>
      <div className={styles.middle}>
        <h3>{taskObj.title}</h3>
        <p className={styles.taskDescription}>{taskObj.description}</p>
      </div>

      <div className={styles.bottom}>
        <p>{taskObj.dueDate}</p>
        <p>{category.name}</p>
      </div>
    </div>
  );
}
