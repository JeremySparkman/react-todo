import React from 'react';
import Task from './Task';

const TasksList = (props) => {
  return (
    <div>
    <div>
      {props.tasks.map((task,index) => {
        return (
          <Task 
          task={task}
          index={index}
          toggleTaskCompleted={props.toggleTaskCompleted}
          removeTask={props.removeTask}
          />
        )
      })}
    </div>
      <button onClick={props.removeAllCompleted}>
        Remove All Completed Tasks
      </button>
    </div>
  );
};

export default TasksList;