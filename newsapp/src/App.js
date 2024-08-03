import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';

export default class App extends Component {
  c = "Shaktimaan";
  render() {
    return (
      <div>
        <NavBar/>
      </div>
    )
  }
}
