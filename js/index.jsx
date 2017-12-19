import React from 'react';
import ReactDOM from 'react-dom';

// function	Search(){
// 				return	<div>
//                </div>;
// }
class App extends React.Component {
   render(){
     return (
       <div>
         <h1>hello</h1>
       </div>
     );
   }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
