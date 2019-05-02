import React from 'react';

const Task = (props) => {
  const { task, index } = props;
  return (
    <div 
    className={`${task.done ? 'completed' : ''} task__item`} 
    key={index}>
      <div>
        <input 
        id={index}
        onChange={(event) => props.toggleTaskCompleted(event, index)} 
        type="checkbox" checked={task.done} />
      </div>
      <label 
      className='task__label'
      for={index}>
        {task.title}
      </label>
      <div>
        <button 
        className='task__button'
        onClick={() => props.removeTask(index)}>
          &times;
        </button>
      </div>
    </div>
  )
}

export default Task;