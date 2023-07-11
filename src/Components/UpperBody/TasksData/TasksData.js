import styles from "./TaskData.module.css";

export default function TasksData(props) {
  const { taskDescription, taskNumber, taskColor } = props;

  const divStyle = {
    borderLeft: `2px solid ${taskColor}`,
  };

  return (
    <div className={styles.taskBox} style={divStyle}>
      <p className={styles.taskDescription}>{taskDescription}</p>
      <p className={styles.taskNumber}>{taskNumber}</p>
    </div>
  );
}
