import React from 'react';
import Button from './Button';
import TasksList from './TasksList';

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      newTask : '',
      tasks : [],
      tasksFilter : 'all'
    };
  }

  newTaskChanged(e){
    this.setState({
        newTask: e.target.value
    });
  }

  addTask(e) {
    e.preventDefault();
    if (this.state.newTask !== ''){
      this.setState({
        newTask: '',
        tasks : [...this.state.tasks, {
          title : this.state.newTask,
          done: false
        }]
      });
    }
    document.getElementById("submitTask").reset();
  }

  removeTask(index) {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  }

  removeAllCompleted() {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter( task => task.done === false);
    this.setState({
      tasks
    });
  }

  showAllTasks() {
    this.setState({
      tasksFilter : 'all'
    });
  }

  showCompletedTasksOnly() {
    this.setState({
      tasksFilter : 'complete'
    });
  }

  showActiveTasksOnly() {
    this.setState({
      tasksFilter : 'active'
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

  countActiveTasks(){
    const tasks = [...this.state.tasks];
    let activeTasks = tasks.filter(task => !task.done);
    return activeTasks.length
  }

  render(){
    let tasks = [];
    
    if (this.state.tasksFilter === 'all'){
      tasks = this.state.tasks;
    } else if (this.state.tasksFilter === 'active'){
      tasks = this.state.tasks.filter(task => !task.done);
    } else if (this.state.tasksFilter === 'complete'){
      tasks = this.state.tasks.filter(task => task.done);
    }

    return (
      <div className="main">
        <h3>Active Tasks: {this.countActiveTasks()}</h3>
        <form id="submitTask" onSubmit={this.addTask.bind(this)}>
          <input onChange={(event) => this.newTaskChanged(event)} id="newTask" />
          <Button  />
        </form>
        <TasksList 
          tasks={tasks} 
          toggleTaskCompleted={this.toggleTaskCompleted.bind(this)}
          removeTask={this.removeTask.bind(this)}
        />
        <button 
        className={this.state.tasksFilter === 'all' ? 'active' : ''} onClick={this.showAllTasks.bind(this)}>
          Show All Tasks
        </button>
        <button 
        className={this.state.tasksFilter === 'active' ? 'active' : ''} 
        onClick={this.showActiveTasksOnly.bind(this)}>
          Show Active Tasks
        </button>
        <button 
        className={this.state.tasksFilter === 'complete' ? 'active' : ''} 
        onClick={this.showCompletedTasksOnly.bind(this)}>
          Show Completed Tasks
        </button>
        <button onClick={this.removeAllCompleted.bind(this)}>
          Remove All Completed Tasks
        </button>
      </div>
    )
  }
}

export default Main;