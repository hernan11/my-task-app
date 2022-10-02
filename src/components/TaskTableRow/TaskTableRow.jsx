import React from "react";
import styles from "./TaskTableRow.module.css";
import { BiPencil, BiTrash } from "react-icons/bi";

//Components
import TaskButton from "../TaskButton/TaskButton";

const TaskTableRow = ({ element, setDataToEdit, deleteData }) => {
  const { name, id } = element;
  return (
    <tr className={styles["row"]}>
      <td className={styles["column"]}>{name}</td>
      <td className={styles["column"]}>
        <TaskButton
          icon={<BiPencil />}
          event={() => setDataToEdit(element)}
          color="blue"
        />
        <TaskButton
          icon={<BiTrash />}
          event={() => deleteData(id)}
          color="red"
        />
      </td>
    </tr>
  );
};

export default TaskTableRow;
