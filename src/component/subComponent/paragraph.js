import React, { Component } from 'react';

class Paragraph extends Component {

  constructor(props) {
      super(props);
   };

  render () {
    return (
      <div className="row">
        <div className="medium-6 columns">
          <p>{this.props.text}</p>
        </div>
      </div>
      )
  }
}

export default Paragraph;
