import React from 'react';

import GameCard from "./gamecard.jsx";


const n = 6;

class GameBoard extends React.Component {
  constructor(props)	{
        super(props);
        this.state	=	{
          visibleCards: [],
          compare: "",
          guessed:[],
          counter: 0
        };
  }
  getVisibleCards = (id, fit)=>{
    let newVis = this.state.visibleCards
    if (newVis.length <=2 && newVis.indexOf(id) < 0) {
      newVis.push(id);

      this.setState({
          visibleCards: newVis,
          compare: fit
      })
    }
    if (this.state.visibleCards.length === 2 && this.state.compare === fit){
        console.log("tadaaaam");
        let newGuess = this.state.guessed
        let newVisible = this.state.visibleCards
        let compile = [...newGuess, ...newVisible]
        this.setTimeoutId = setTimeout(()=>{
            this.setState({
                visibleCards: [],
                guessed: compile,
                counter: this.state.counter + 1
            }, ()=> this.props.showanimal(this.state.counter, this.state.guessed.length, fit)
            )
        },2000);



    }else if (this.state.visibleCards.length === 2 && this.state.compare !== fit){
        console.log("ups");
        this.setTimeoutId = setTimeout(()=>{
          this.setState({
              visibleCards: [],
              counter: this.state.counter + 1
          }, ()=> this.props.showanimal(this.state.counter, this.state.guessed.length))
        },2000);


    }
  }

  render(){
    const numberList = [1, 2, 2, 3, 5, 4, 4, 3, 1, 5, 6, 6];
    // console.log(this.props.mix); // podmienić

    return (
      <div className="container">
      <div className="crazygame">
        {
          numberList.map( (value,index) => {
            return <GameCard onof={this.state.visibleCards.length} display={this.state.visibleCards.indexOf(index)>-1}
              guessed={this.state.guessed.indexOf(index)>-1} getCard={this.getVisibleCards} key={index} id={index} card={this.props.data[value - 1]}/>
          })
        }
      </div>
    </div>
     );
  }
}

export default GameBoard;
