import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css';

import EventCreator from './components/EventCreator';
import CountdownContainer from './components/CountdownContainer';

function App() {
  return (
    <Router>
      <div className="addEventBtn">
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/add-an-event">Add an event!</Link>
      </div>
      <Route exact path="/add-an-event" component={EventCreator} />
      <CountdownContainer uri="http://localhost:3001/events" />
    </Router>
  )
}

export default App;
