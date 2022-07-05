import React from 'react'

import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Reasons from './components/Reasons';
import Subscriptions from './components/Subscriptions';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Subscriptions />
      <Testimonials />
    </div>
  );
}

export default App;
