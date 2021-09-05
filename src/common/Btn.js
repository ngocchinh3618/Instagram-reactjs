import React, { Component } from 'react';

class Btn extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
        <button className="btn" onClick={this.props.btnLogin}>
        {this.props.txt}
        </button>
    );
  }
}

export default Btn;