import React from 'react';


class Home extends React.Component {
  constructor(props)	{
        super(props);
        this.state	=	{
        newgame: true,
        yourname: ""
        };
  }
  changeHandler = (event)=>{
    this.setState({
      yourname: event.target.value
     }, this.sendData);
  }
  clickButton = ()=>{
    this.setState({
      newgame: false
    }, this.sendData);
  }

  sendData = ()=> {
    if (typeof this.props.getdata === "function") {
          this.props.getdata(this.state.yourname, this.state.newgame);
    }
  }
  render(){
    return (
        <div className="row">
          <div className="col maxwidth main">
            <h1>Animals Memory Game</h1>

            <form>
              <h2>Write your name:</h2>
              <input onChange={this.changeHandler} type="text" name="yourname" value={this.state.yourname} placeholder="Name..." />

            </form>

            { this.state.yourname.length > 0 ?
            <div className="sayhello">
              <h1> Hello {this.state.yourname}</h1>
              <button onClick={this.clickButton}>START GAME</button>
            </div> :
            <div></div>  }
          </div>
        </div>
     );
  }
}

export default Home;
