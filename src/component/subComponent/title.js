import React, { Component } from 'react';

class Title extends Component {

  constructor(props) {
      super(props);
   };

  render () {
    return (
      <div className="row">
        <div className="medium-6 columns">
          <h1>{this.props.value}</h1>
        </div>
      </div>
      )
  }
}

export default Title;
