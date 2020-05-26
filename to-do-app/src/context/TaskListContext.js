import React, { useState, createContext } from "react";
import uuid from 'react-uuid'

export const TaskListContext = createContext();

const TaskListProvider = props => {
  const [tasks, setTasks] = useState([
    { task: "Read book", id: 1 },
    { task: "watch movie", id: 2 },
    { task: "play football", id: 3 }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const addTask = (title) => {
    setTasks([...tasks, {task: title, id: uuid()}])
  }

  const clearAll = () => {
    setTasks([]);
  }

  return (
    <TaskListContext.Provider value={{ tasks, addTask, deleteTask, clearAll }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListProvider;
