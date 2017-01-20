import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import TopNavBar from './components/TopNavBar.js';
import HugeHeader from './components/HugeHeader.js';
import './styles.css';

// TODO: get permission to use https://www.elon.edu/images/e-web/law/about/GreensboroSkyline.jpg
class App extends Component {
  render() {
    return (
      <div>
        <HugeHeader/>
        <TopNavBar/>
      </div>
    );
  }
}

export default App;
