import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import EventsPage from './pages/eventsPage';

function App() {
  return (
    <div className="lg:mx-36">
      <Header />
      <EventsPage />
      </div>
  );
}

export default App;
