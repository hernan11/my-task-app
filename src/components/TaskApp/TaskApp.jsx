import React, { useEffect, useState } from "react";
import styles from "./TaskApp.module.css";

//Components
import TaskForm from "../TaskForm/TaskForm";
import TaskTable from "../TaskTable/TaskTable";

const storage = window.localStorage;
const initialTasks = [];

const getTasks = () => {
  const TASKS = storage.getItem("tasks");
  if (TASKS) return JSON.parse(TASKS);
  else return initialTasks;
};

const TaskApp = () => {
  const [tasks, setTasks] = useState(getTasks);
  const [dataToEdit, setDataToEdit] = useState(null);

  useEffect(() => {
    storage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const createData = (data) => {
    data.id = Date.now();
    setTasks([...tasks, data]);
  };
  const updateData = (data) => {
    const newData = tasks.map((element) =>
      element.id === data.id ? data : element
    );
    setTasks(newData);
  };
  const deleteData = (id) => {
    const isDelete = confirm(
      "¿Estás seguro de eliminar la tarea seleccionada?"
    );

    if (isDelete) {
      const newData = tasks.filter((element) => element.id !== id);
      setTasks(newData);
    } else {
      return;
    }
  };

  const deleteAllData = () => {
    const isDeleteAll = confirm("¿Estás seguro de eliminar todas las tareas?");

    if (isDeleteAll) {
      setTasks(initialTasks);
    } else {
      return;
    }
  };

  return (
    <article className={styles["container"]}>
      <div>
        <TaskForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      </div>
      <div>
        <TaskTable
          data={tasks}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
          deleteAllData={deleteAllData}
        />
      </div>
    </article>
  );
};

export default TaskApp;
