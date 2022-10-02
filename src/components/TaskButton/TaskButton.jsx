import React from "react";
import styles from "./TaskButton.module.css";

const TaskButton = ({ type, icon, event, color }) => (
  <button
    type={type}
    className={`${styles["button"]} ${styles[`button--${color}`]}`}
    onClick={event}
  >
    {icon}
  </button>
);

export default TaskButton;
