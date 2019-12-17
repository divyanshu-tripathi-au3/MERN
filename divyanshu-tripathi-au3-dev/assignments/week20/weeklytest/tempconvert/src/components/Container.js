import React, { Component } from 'react';
import './Container.css';

import TemperatureConverter from './TemperatureConverter';

import TemperatureForm from './TemperatureForm';


class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celDegree: "",
      fahDegree: ""
      
    }
  }

 

  onCelChangeHandler(e) {
    let degree = e.target.value;
    this.setState({
      celDegree: degree,
      fahDegree: TemperatureConverter.celToFah(degree)
     
    });
  }

  onFahChangeHandler(e) {
    let degree = e.target.value;
    let celDegree = TemperatureConverter.fahToCel(degree);
    this.setState({
      celDegree: celDegree,
      fahDegree: degree,
      
    });
  }

  render() {
    return (
      <div className="Container">

        <TemperatureForm
          legend="Enter the temperature in Celsius "          
          onChange={this.onCelChangeHandler.bind(this)}
          degree={this.state.celDegree}
          />

        
        <TemperatureForm
          legend="Enter the temperature in  Fahrenheit"
          
          onChange={this.onFahChangeHandler.bind(this)}
          degree={this.state.fahDegree}
          />

        
      </div>
    );
  }
}

export default Container;