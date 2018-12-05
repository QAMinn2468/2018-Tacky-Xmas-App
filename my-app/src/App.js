import React, { Component } from 'react'
import './App.css'
import Banner from './Banner.js'
// import Sidebar from './Sidebar.js'
import Tree from './Tree.js'
// import Audio from './Audio.js'
// <Sidebar />


/*********************************Start of Component***************************/

class App extends Component {
  // Insert state here

  render() {
    return (
      <div className="App">
      <Banner />
      <Tree />

      </div>
    );
  }
}

export default App;
