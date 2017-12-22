import React from 'react';
import ReactDOM from 'react-dom';

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
						newgame: true,
            yourname:""
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
    getData = (yourname, newgame) =>{
          this.setState({yourname, newgame})
    }
   render(){
		 let mixed = this.randomNumber();
     return (
          <Template>
						{
							this.state.newgame ?
							<Home getdata={this.getData}/> :
							<MainGame mix={mixed} yourname={this.state.yourname}/>
						}
          </Template>

     );
   }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
