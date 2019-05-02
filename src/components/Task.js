import React from 'react';

const Task = (props) => {
  const { task, index } = props;
  return (
    <div className={task.done ? 'completed' : ''} key={index}>
    <input onChange={(event) => props.toggleTaskCompleted(event, index)} type="checkbox" checked={task.done} />
      {task.title}
    </div>
  )
}

export default Task;