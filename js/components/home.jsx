import React from 'react';
import {IndexLink} from 'react-router';


class Home extends React.Component {
  constructor(props)	{
        super(props);
        this.state	=	{
        yourname: "",
        };
  }
  changeHandler = (event)=>{
    this.setState({
      yourname: event.target.value
     }, this.sendData);
  }
  // sendData = ()=> {
  //   if (typeof this.props.route.getdata === "function") {
  //         let yourName = this.state.yourname;
  //         this.props.route.getdata(yourName);
  //   }
  // }
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
              <button><IndexLink to="/game" className="" activeClassName="">START GAME</IndexLink></button>
            </div> :
            <div></div>  }
          </div>
        </div>
     );
  }
}

export default Home;
