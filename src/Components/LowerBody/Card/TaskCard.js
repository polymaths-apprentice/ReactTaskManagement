import React, { useState } from "react";
import styles from "./TaskCard.module.css";
import { Link, useNavigate } from "react-router-dom";

import arrowIcon from "../../../Assets/Arrow icon.svg";
import starFilled from "../../../Assets/Star logo colored.svg";
import starNotFilled from "../../../Assets/Star logo un-colored.svg";

export default function TaskCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  function handleEdit() {
    // Replace 'thisTaskCurrentId' with the actual task ID you want to pass
    const taskId = "thisTaskCurrentId";
    navigate(`/edit/${taskId}`); // Navigate to the edit route with the task ID
  }
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
          <img
            src={arrowIcon}
            onClick={handleEdit} // Call the handleEdit function when the button is clicked
            alt="Logo"
          />
        </button>
      </div>
      <div className={styles.middle}>
        <h3>Create react app</h3>
        <p className={styles.taskDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing eli
        </p>
      </div>

      <div className={styles.bottom}>
        <p>due date</p>
        <p>category X</p>
      </div>
    </div>
  );
}
