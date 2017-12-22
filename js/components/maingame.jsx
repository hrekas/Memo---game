import React from 'react';
import {IndexLink} from 'react-router';

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
  randomNumber = () =>{
    let randomNumbersArray =[];
    for (let i = 1; i < 7; i++) {
    randomNumbersArray.push(i);
    }
    let mix = [...randomNumbersArray, ...randomNumbersArray];
    let len, x, j;

    for (len = mix.length-1; len > 0; len--) {
      j = Math.floor(Math.random() * (len + 1));
      x = mix[len];
      mix[len] = mix[j];
      mix[j] = x;
    }
    return mix;
  }
  showAnimal = (counter, endgame, animalNr) => {
    this.setState({
      showanimal: animalNr,
      counter: counter,
      endgame: endgame
    })
  }

  render(){
    if (this.state.endgame == 12){
      console.log("you win");
    }
    let showAnim = Number(this.state.showanimal)-1;
    return (
      <div className="row">
          <div className="col main">
            <GameBoard data={data} showanimal={this.showAnimal} mix={this.randomNumber()}/>
          </div>
          <div className="col main">
            <GameInfo showanimal={showAnim} data={data} counter={this.state.counter}/>
          </div>
          {
            this.state.endgame == 12 ? <div className="fullScreen"><h1>BRAWO</h1><h2>Udało Ci się znaleźć wszystkie pary w {this.state.counter} krokach</h2> <button><IndexLink to="/">NEW GAME</IndexLink></button></div> : <div></div>
          }

      </div>
     );
  }
}

export default MainGame;
