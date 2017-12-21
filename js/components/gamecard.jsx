import React from 'react';

class GameCard extends React.Component {
  constructor(props)	{
        super(props);
        this.state	=	{
          class: "card"
        };
  }
  clickCard = (event) =>{
    // console.log(this.props.id);
    if (typeof this.props.getCard === "function") {
      this.props.getCard(this.props.id, this.props.card.id)
    }
  }

  render(){
    // console.log(this.props.card.id);
    // console.log(this.props.id);

    return (
      <div className={this.props.display || this.props.guessed ? this.props.card.class+" card" :"card"} id={this.props.id} onClick={this.clickCard}>
     </div>
     );
  }
}

export default GameCard;
