import React from 'react';
import Task from './Task';

const TasksList = (props) => {
  return (
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
  );
};

export default TasksList;