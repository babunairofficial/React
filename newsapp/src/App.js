import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = "Shaktimaan";
  render() {
    return (
      <div>
        working with class based component {this.c}
      </div>
    )
  }
}
