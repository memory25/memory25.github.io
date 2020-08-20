import React from 'react';
import scrollToView from '../Nav/scrollToView';

export default () => (
  <div id="home">
    <i className="star-1" />
    <i className="star-2" />
    <i className="star-3" />
    <div className="main">
      <div className="me" />
      <div className="me2" />
      <h1 className="name">Sam Jhuang</h1>
      <h2 className="role">Front-End Developer</h2>
    </div>
    <a href="#personal" className="homeJump" onClick={scrollToView}>
      <div className="homeJumpImg" />
    </a>
  </div>
);
