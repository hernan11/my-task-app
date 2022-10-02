import React from "react";
import styles from "./App.module.css";

//Components
import TaskApp from "../components/TaskApp/TaskApp";

const App = () => {
  return (
    <>
      <header>
        <h1 className={styles["title"]}>Mis Tareas</h1>
      </header>
      <main>
        <TaskApp />
      </main>
    </>
  );
};

export default App;
