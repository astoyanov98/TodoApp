import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  console.log(tasks);
  return (
    <div>
      <ul className="list">
        {tasks.map(task => {
          return <Task key={task.id} task={task} />;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
