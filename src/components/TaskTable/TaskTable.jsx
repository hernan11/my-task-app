import React from "react";
import styles from "./TaskTable.module.css";

//Components
import TaskTableRow from "../TaskTableRow/TaskTableRow";

const TaskTable = ({ data, setDataToEdit, deleteData, deleteAllData }) => {
  return (
    <>
      <div className={styles["header"]}>
        <h2 className={styles["title"]}>LISTADO</h2>
        <button className={styles["button"]} onClick={deleteAllData}>
          Eliminar Tareas
        </button>
      </div>

      <table className={styles["table"]}>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td>No hay tareas para hacer</td>
            </tr>
          ) : (
            data.map((element) => (
              <TaskTableRow
                key={element.id}
                element={element}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default TaskTable;
