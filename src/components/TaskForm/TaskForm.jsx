import React, { useState, useEffect } from "react";
import styles from "./TaskForm.module.css";
import { BiPlus, BiUndo } from "react-icons/bi";

//Components
import TaskButton from "../TaskButton/TaskButton";

const initialForm = {
  id: null,
  name: "",
};

const TaskForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) setForm(dataToEdit);
    else setForm(initialForm);
  }, [dataToEdit]);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name) {
      alert("No sé puede agregar una tarea vacía");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };
  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <>
      <h2 className={styles["title"]}>{dataToEdit ? "Editar" : "Agregar"}</h2>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ingrese una tarea"
          onChange={handleChange}
          value={form.name}
          className={styles["input"]}
        />
        <div className={styles["buttons"]}>
          <TaskButton icon={<BiPlus />} event={handleSubmit} color="green" />
          <TaskButton
            type="reset"
            icon={<BiUndo />}
            event={handleReset}
            color="yellow"
          />
        </div>
      </form>
    </>
  );
};

export default TaskForm;
