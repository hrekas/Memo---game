import React from 'react';

import GameBoard from "./gameboard.jsx";
import GameInfo from "./gameinfo.jsx";

const data = [
    {
      id: 1,
      class: "next1",
      animal: "To jest Słoń, ma długą trąbę."
    },
    {
      id: 2,
      class: "next2",
      animal: "To jest Kurczaczek, jest żółty i mięciutki."
    },
    {
      id: 3,
      class: "next3",
      animal: "To jest Żaba, kumka i mieszka w stawie."
    },
    {
      id: 4,
      class: "next4",
      animal: "To jest Panda, multikulturowe zwierze białe, czarne i azjatyckie."
    },
    {
      id: 5,
      class: "next5",
      animal: "To jest Jelonek, ma rogi i raciczki."
    },
    {
      id: 6,
      class: "next6",
      animal: "To jest Lew, ma grzywę i jest królem zwierząt."
    },
    {
      id: 7,
      class: "next7",
      animal: "To jest Kot, pije mleczko i mruczy."
    },
    {
      id: 8,
      class: "next8",
      animal: "To jest Pingwin, jaskółka, która jadła po 18."
    },
    {
      id: 9,
      class: "next9",
      animal: "To jest Jeż, mieszka w lesie i ma igły na plecach."
    },
    {
      id: 10,
      class: "next9",
      animal: "To jest Lis, jest sprytny i ma rude futerko."
    },
    {
      id: 11,
      class: "next9",
      animal: "To jest Koala, lubi jeść liście eukaliptusa."
    },
    {
      id: 12,
      class: "next9",
      animal: "To jest Mysz, chowa się przed kotem do dziurki."
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
    if (endgame ==12) {
      this.setTimeoutID = setTimeout(()=>{
          this.setState({
            showanimal: animalNr,
            counter: counter,
            endgame: endgame
          })
      },3000);

    }else{
      this.setState({
        showanimal: animalNr,
        counter: counter,
        endgame: endgame
      })
    }
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
