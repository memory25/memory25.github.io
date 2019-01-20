import React, {Component} from 'react';
import Home from './Home';
import Personal from './Personal';
import Resume from './Resume';
import Porfolios from './Porfolios';
import Contact from './Contact';

const App = () => (
  <div id="app">
    <Home />
    <Personal />
    <Resume />
    <Porfolios />
    <Contact />
  </div>
);

export default App;
