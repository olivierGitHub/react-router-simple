import React, { Component } from 'react';

class Calculator extends Component {

  constructor(props) {
      super(props);

      this.state = {
         value1: '0',
         value2: '1',
         res: '0',
         error: false
      }

      this.updateValue1 = this.updateValue1.bind(this);
      this.updateValue2 = this.updateValue2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

   };

    updateValue1(e) {
      this.setState({value1: e.target.value});
   }

   updateValue2(e) {
      this.setState({value2: e.target.value});
   }

   handleSubmit(e){
    e.preventDefault();
    if(isNaN(this.state.value1) || isNaN(this.state.value2)){
        this.setState({error: true});
      }else{
        var val1 = parseInt(this.state.value1, 10);
        var val2 = parseInt(this.state.value2, 10);
        var result = val1 + val2;
        this.setState({res: result})
        this.setState({error: false});
      }
   }

  render () {
    return (

        <form onSubmit={this.handleSubmit}>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="medium-6 columns">
              <input type="text" value={this.state.value1} onChange={this.updateValue1} />
            </div>
            <div className="medium-6 columns">
              <input type="text" value={this.state.value2} onChange={this.updateValue2} />
            </div>
          </div>
          <div className="row">
            <input type="submit" value="calculate" />
          </div>
          {
          this.state.error
            ?
              <h2> un des deux nombres n'est pas correct</h2>
            :
              <div className="row medium-6 columns">
                <h2>res = {this.state.res}</h2>
              </div>
          }

        </form>

      )
  }
}

export default Calculator;
