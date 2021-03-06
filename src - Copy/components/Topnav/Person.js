import React, {Component} from 'react';
import classes from './Person.css';
import Auxiliary from "../../../hoc/Auxiliary"

class Person extends Component {
    render() {
      return (
        <Auxiliary>
          <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name} />
        </Auxiliary>
      );
  }
}

export default Person;
