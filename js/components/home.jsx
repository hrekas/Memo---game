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
  sendData = ()=> {
    if (typeof this.props.route.getdata === "function") {
          this.props.route.getdata(this.state.yourname);
    }
  }
  render(){
    console.log(this.props);
    return (
        <div className="row">
          <div className="col maxwidth main">
            <h1>Memory Game</h1>
            <h3>Write your name</h3>
            <form>
              <input onChange={this.changeHandler} type="text" name="yourname" value={this.state.yourname} placeholder="Name..." />

            </form>

            { this.state.yourname.length > 0 ?
            <div>
              <h1> Hello {this.state.yourname}</h1>
              <IndexLink to="/game" className="" activeClassName="">START GAME</IndexLink>
            </div> :
            <div></div>  }
          </div>
        </div>
     );
  }
}

export default Home;
