import React from 'react';

class GameInfo extends React.Component {


  render(){
    console.log(this.props.showanimal);
    console.log(this.props.data);
    let animal
    return (
      <div className="container info">
          <h2 className="counter">Steps: {this.props.counter}</h2>

          {
            this.props.showanimal >-1 ?
            <div>
              <h2 className="showanimal">well done</h2>
              <h2 className="showanimal">{this.props.data[this.props.showanimal].animal}</h2>
            </div> :
            <div><h2 className="showanimal"></h2></div>
          }

      </div>
     );
  }
}

export default GameInfo;
