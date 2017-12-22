import React from 'react';

import GameBoard from "./gameboard.jsx";
import GameInfo from "./gameinfo.jsx";

const data = [
    {
      id: 1,
      class: "next1",
      animal: "To jest Słoń, ma długą trąbę"
    },
    {
      id: 2,
      class: "next2",
      animal: "To jest Kurczaczek, jest żółty i mięciutki"
    },
    {
      id: 3,
      class: "next3",
      animal: "To jest Żaba, kumka i mieszka w stawie"
    },
    {
      id: 4,
      class: "next4",
      animal: "To jest Panda, multikulturowe zwierze białe, czarne i azjatyckie"
    },
    {
      id: 5,
      class: "next5",
      animal: "To jest Jelonek, ma rogi i raciczki"
    },
    {
      id: 6,
      class: "next6",
      animal: "To jest Lew, ma grzywę i jest królem zwierząt"
    },
]


class MainGame extends React.Component {
  constructor(props)	{
        super(props);
        this.state	=	{
          showanimal: "",
          counter: 0,
          endgame: 0
        };
  }

  showAnimal = (counter, endgame, animalNr) => {
    this.setState({
      showanimal: animalNr,
      counter: counter,
      endgame: endgame
    })
  }

  render(){
    console.log(this.props.mix);

    let showAnim = Number(this.state.showanimal)-1;
    return (
      <div className="row">
          <div className="col main">
            <GameBoard data={data} showanimal={this.showAnimal} mix={this.props.mix}/>
          </div>
          <div className="col main">
            <GameInfo yourname={this.props.yourname} showanimal={showAnim} data={data} counter={this.state.counter}/>
          </div>
          {
            this.state.endgame == 12 ? <div className="fullScreen"><h1>BRAWO</h1><h2>Udało Ci się znaleźć wszystkie pary w {this.state.counter} krokach</h2> <button><a href="/">NEW GAME</a></button></div> : <div></div>
          }

      </div>
     );
  }
}

export default MainGame;
