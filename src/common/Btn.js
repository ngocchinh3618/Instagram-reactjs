import React, { Component } from 'react';

class Btn extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
        <button className="btn">
        {this.props.txt}
        </button>
    );
  }
}

export default Btn;