import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';

import EventCreator from './components/EventCreator';
import CountdownContainer from './components/CountdownContainer';

const initialState = {
  newEvent: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'NO':
      return {
        newEvent: false
      };
    case 'YES':
      return {
        newEvent: true
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="addEventBtn">
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/add-an-event">Add an event!</Link>
        </div>
        <Route exact path="/add-an-event" component={EventCreator} />
        <CountdownContainer uri="http://localhost:3001/events" />
      </Provider>
    </Router>
  )
}

export default App;
