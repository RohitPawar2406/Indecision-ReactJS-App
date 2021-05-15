import React from 'react';
/*

class Action extends React.Component{
    handlePick()
    {
        alert("HEllo!!")
    }
    render()
    {
        return <div>
            <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What Should I do?</button>
        </div>
    }
}
*/
const Action = (props) => {
  return (
    <div>
      <button
        className="big-button"
        onClick={props.handlePick}      // Above Indecision App handlePick is invoked as we pass it as prop parameter
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

export default Action

