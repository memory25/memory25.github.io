import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Personal from './Personal';
import Experience from './Experience';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

const App = () => (
  <div id="app">
    <Nav />
    <Home />
    <Personal />
    <Experience />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
);

export default App;
