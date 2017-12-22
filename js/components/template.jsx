import React from 'react';

import Footer from "./footer.jsx";


class Template extends React.Component {
  render(){
    return (
      <div className="container">
          <div className="row">
            <div className="col header">
              <h2>Memory Game for Kids</h2>
            </div>
            <div className="col header">
                <a href="/"><button>NEW GAME</button></a>
            </div>

          </div>
          <hr/>
          {this.props.children}
          <div className="row">
             <Footer/>
          </div>
      </div>
      );
  }
}

export default Template;
