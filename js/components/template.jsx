import React from 'react';
import {IndexLink} from 'react-router';

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
              <IndexLink to="/" className="" activeClassName="">HOME</IndexLink>
            </div>
          </div>
          {this.props.children}
          <div className="row">
             <Footer/>
          </div>
      </div>
      );
  }
}

export default Template;