import React from 'react';
import ReactDOM from 'react-dom';
import	{	Router,
		Route,
		// Link,
		// IndexLink,
		IndexRoute,
		hashHistory
}	from	'react-router';
import Template from "./components/template.jsx";
import Home from "./components/home.jsx";
import MainGame from "./components/maingame.jsx";

// function	Search(){
// 				return	<div>
//                </div>;
// }

class App extends React.Component {
    constructor(props)	{
          super(props);
          this.state	=	{
            yourname:"dd"
          };
    }
    getData = (name) =>{
          this.setState({
            yourname: name
          })
    }
   render(){
     return (
       <Router	history={hashHistory}>
          <Route	path='/' component={Template}>
     				 <IndexRoute getdata={this.getData} component={Home}/>
     			   <Route name={this.state.yourname}	path='/game' component={MainGame}/>
          </Route>
 			 </Router>
     );
   }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
