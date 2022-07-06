import React from 'react'

import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Join from './components/Join';
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
      <Join />
      <Footer />
    </div>
  );
}

export default App;
