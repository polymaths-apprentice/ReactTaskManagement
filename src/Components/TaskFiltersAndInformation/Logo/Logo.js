import styles from "./Logo.module.css";
import logoImage from "../../../Assets/Asset 1.svg";
export default function Logo() {
  return (
    <div className={styles.logo}>
      <img className={styles.logoImage} src={logoImage} alt="Logo" />
      <div className={styles.smallCircles}>
        <div className={styles.smallCircle}></div>
        <div className={styles.smallCircle}></div>
        <div className={styles.smallCircle}></div>
      </div>
    </div>
  );
}
