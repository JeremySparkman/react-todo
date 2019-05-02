import React from 'react';

const Task = (props) => {
  const { task, index } = props;
  return (
    <div>
      <div className={task.done ? 'completed' : ''} key={index}>
      <input onChange={(event) => props.toggleTaskCompleted(event, index)} type="checkbox" checked={task.done} />
        {task.title}
      </div>
      <button onClick={() => props.removeTask(index)}>Remove Task</button>
    </div>
  )
}

export default Task;