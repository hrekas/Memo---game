import React from 'react';

class GameInfo extends React.Component {
  render(){
    return (
      <div className="container">
          <h2>Hi, {this.props.name}</h2>
      </div>
     );
  }
}

export default GameInfo;
