import React from 'react';
import GameBoard from "./gameboard.jsx";
import GameInfo from "./gameinfo.jsx";


class MainGame extends React.Component {
  render(){
    console.log(this.props.route.name);
    return (
      <div className="row">
          <div className="col main">
            <GameBoard/>
          </div>
          <div className="col main">
            <GameInfo name={this.props.route.name}/>
          </div>
      </div>
     );
  }
}

export default MainGame;
