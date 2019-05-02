import React from 'react';
import Button from './Button';
import TasksList from './TasksList';

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      newTask : '',
      tasks : []
    };
  
  }
  newTaskChanged(e){
    this.setState({
        newTask: e.target.value
    });
  }

  addTask(e) {
    e.preventDefault();
    this.setState({
      newTask: '',
      tasks : [...this.state.tasks, {
        title : this.state.newTask,
        done: false
      }]
    });
    document.getElementById("submitTask").reset();
  }

  removeTask(index) {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  }

  toggleTaskCompleted(e,i){
    const tasks = [...this.state.tasks];
    tasks[i] = {
      ...tasks[i],
      done : e.target.checked
    };
    this.setState({
      tasks
    });
  }

  render(){
    return (
      <div className="main">
        <h3>Next Task</h3>
        <form id="submitTask" onSubmit={this.addTask.bind(this)}>
          <input onChange={(event) => this.newTaskChanged(event)} id="newTask" />
          <Button  />
        </form>
        <TasksList 
          tasks={this.state.tasks} 
          toggleTaskCompleted={this.toggleTaskCompleted.bind(this)}
          removeTask={this.removeTask.bind(this)}
        />
      </div>
    )
  }
}

export default Main;