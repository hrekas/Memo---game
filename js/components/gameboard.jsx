import React from 'react';



class GameBoard extends React.Component {
  constructor(props)	{
        super(props);
        this.state	=	{
                };
  }
  randomNumber = () =>{
    let randomNumbers =[];
    for (let i = 0; i < 12; i++) {
      let number = Math.floor(Math.random() * (11-0) +0);
      if(randomNumbers.indexOf(number) === -1){
          randomNumbers.push(number);
      }
    }
    return randomNumbers;
  }

  render(){
    console.log(this.randomNumber());
    return (
      <div className="container">
      <div className="crazygame">
          <div className="card"><span>1</span></div>
          <div className="card"><span>2</span></div>
          <div className="card"><span>3</span></div>
          <div className="card"><span>4</span></div>
          <div className="card"><span>5</span></div>
          <div className="card"><span>6</span></div>
          <div className="card"><span>1</span></div>
          <div className="card"><span>2</span></div>
          <div className="card"><span>3</span></div>
          <div className="card"><span>4</span></div>
          <div className="card"><span>5</span></div>
          <div className="card"><span>6</span></div>
      </div>
    </div>
     );
  }
}

export default GameBoard;
