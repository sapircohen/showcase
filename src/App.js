import React from 'react';
import Hero from './components/hero';
import Cards from './components/cards';
//detect browser:
// import BrowserDetection from 'react-browser-detection';
//CSS:
import './css/index.css';


function App() {
  return (
    <div>
      <Hero/>
      <Cards/>
    </div>
  );
}

export default App;
