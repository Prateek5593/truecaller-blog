import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';
import { BrowserRouter as Router } from 'react-router-dom';

export default () => {

  return (
    <Router>
      <div className="App wrapper">
        <Content />
      </div>
    </Router>
  );
}
