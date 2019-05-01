import React from "react";
import logo from "../images/plus-sign.svg";

class Button extends React.Component {
  render(){
    return (
      <a role="button" className="main__button" href="/addtask">
        <img src={logo} alt="Add Task" />
      </a>
    )
  }
}

export default Button;