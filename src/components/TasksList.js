import React from 'react';
import Task from './Task';

const TasksList = (props) => {
  return (
    <div className="taskList">
      {props.tasks.map((task,index) => {
        return (
          <Task 
          task={task}
          index={index}
          key={index}
          toggleTaskCompleted={props.toggleTaskCompleted}
          removeTask={props.removeTask}
          />
        )
      })}
    </div>
  );
};

export default TasksList;