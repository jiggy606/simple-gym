import React from 'react'

import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Reasons from './components/Reasons';
import Subscriptions from './components/Subscriptions';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Subscriptions />
    </div>
  );
}

export default App;
