import React, {useContext} from "react";
import {TaskListContext} from '../context/TaskListContext'

const Task = ({ task }) => {
  const {deleteTask, clearAll} = useContext(TaskListContext)

  return (
    <li className="list-item">
      <span>{task.task}</span>
      <div>
        <button onClick={() => deleteTask(task.id)} className="btn-delete task-btn" >
          <i className="fas fa-trash-alt" />
        </button>
        <button className="btn-edit task-btn">
          <i className="fas fa-pen" />
        </button>
      </div>
    </li>
  );
};

export default Task;
