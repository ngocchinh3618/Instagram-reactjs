import React, { Component } from 'react';


class Input extends Component {
  render() {
    return (
      <div className="loginInput">
        <span></span>
        <input placeholder="Phone number, username, or email" className="loginInput__input" type="text" />
        <div className="loginInput__show">show</div>
      </div>
    );
  }
}

export default Input; 