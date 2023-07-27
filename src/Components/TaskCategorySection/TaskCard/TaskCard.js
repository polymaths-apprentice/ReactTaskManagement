import { useState } from "react";
import styles from "./TaskCard.module.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import arrowIcon from "../../../Assets/Arrow icon.svg";
import starFilled from "../../../Assets/Star logo colored.svg";
import starNotFilled from "../../../Assets/Star logo un-colored.svg";
import Task from "../../../Models/TaskModel";
import Category from "../../../Models/CategoryModel";

export default function TaskCard({ taskObj, category }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleEdit = () => {
    const taskId = taskObj.id;
    navigate(`/edit/${taskId}`);
  };

  const taskDate = new Date(taskObj.dueDate).toDateString();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <button className={styles.favorite} onClick={handleFavorite}>
          {isFavorite ? (
            <img src={starFilled} alt="Logo" />
          ) : (
            <img src={starNotFilled} alt="Logo" />
          )}
        </button>

        <button className={styles.logoImage} onClick={handleEdit}>
          <img src={arrowIcon} alt="Logo" />
        </button>
      </div>
      <div className={styles.middle}>
        <h3>{taskObj.title}</h3>
        <p className={styles.taskDescription}>{taskObj.description}</p>
      </div>

      <div className={styles.bottom}>
        <p>{taskDate}</p>
        <p>{category.name}</p>
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  taskObj: PropTypes.instanceOf(Task).isRequired,
  category: PropTypes.instanceOf(Category).isRequired,
};
