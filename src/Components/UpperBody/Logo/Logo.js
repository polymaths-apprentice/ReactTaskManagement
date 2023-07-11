import React from "react";
import styles from "./Logo.module.css";
import logoImage from "../../../Assets/Asset 1.svg"; // Replace with the correct path to your image file
import Button from "react-bootstrap/esm/Button";
export default function Logo() {
  return (
    <div className={styles.logo}>
      <img className={styles.logoImage} src={logoImage} alt="Logo" />
      <div className={styles.smallCircles}>
        <div className={styles.smallCircle}></div>
        <div className={styles.smallCircle}></div>
        <div className={styles.smallCircle}></div>
        {/* Add more small circles as needed */}
      </div>
    </div>
  );
}
