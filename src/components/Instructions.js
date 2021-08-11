import React, { Component } from "react";

class Instructions extends Component {
  
  state = {
    isExpanded: false, // Event is collapsed by default
  };

  // Toggle expand/collapse event on click
  handleExpandEvent = () => {
    if (this.state.isExpanded === false) {
      this.setState({
        isExpanded: true,
      });
    } else {
      this.setState({
        isExpanded: false,
      });
    }
  };

  renderExpandedComponent = () => {
    if (this.state.isExpanded) {
      return (
        <p>
          <ul>
          <li>Use left/right arrow keys to move tetromino from side to side </li><br/>
          <li>Use up arrow key to rotate tetromino</li><br/>
          <li>Use down arrow key to move tetromino down at a faster rate</li><br/>
          <li>Press shift key to send tetromino straight to the bottom</li><br/>
          <li>Press space bar to restart game</li>
          </ul>
        </p>
      );
    }
  };

  renderButtonText = () => {
    return !this.state.isExpanded ? 'Show Instructions' : 'Hide Instructions';
  };

  render() {
    return (
      <div className="instructions">
        <div className="instructionsInner">
          <div>{this.renderExpandedComponent()}</div>
          <button 
          type='button' 
          className='instructions-btn'
          onClick={this.handleExpandEvent}
          >
            {this.renderButtonText()}
          </button>
        </div>
      </div>
    );
  }
}

export default Instructions;