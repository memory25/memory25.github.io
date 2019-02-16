import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Personal from './Personal';
import Resume from './Resume';
import Skills from './Skills';
import Porfolios from './Porfolios';
import Contact from './Contact';
import Footer from './Footer';

const App = () => (
  <div id="app">
    <Nav />
    <Home />
    <Personal />
    <Resume />
    <Skills />
    <Porfolios />
    <Contact />
    <Footer />
  </div>
);

export default App;
