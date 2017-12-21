import React from 'react';

class GameInfo extends React.Component {


  render(){
    console.log(this.props.showanimal);
    console.log(this.props.data);
    let animal
    return (
      <div className="container">
          <h2>Counter: {this.props.counter}</h2>

          {
            this.props.showanimal >-1 ? <h2>{this.props.data[this.props.showanimal].animal}</h2> :
            <h2></h2>
          }

      </div>
     );
  }
}

export default GameInfo;
