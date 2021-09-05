import React, { Component } from 'react';




class Input extends Component {
  constructor(props) {
    super(props);
    
  };
  render() {
    return (
      <div className="loginInput">
        <span></span>
        <input onChange={this.props.onChangeEvent} placeholder={this.props.placeholder} className="loginInput__input" type={this.props.type} name={this.props.name} />
        <div className="loginInput__show d-none">show</div>
      </div>
    );
  }
}

export default Input; 