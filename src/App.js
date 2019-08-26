import React from 'react';
import './App.css';
import HelloWorld from './state-drills/Hello world'
import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun';




function App() {
  return (
    <main className='App'>
      <HelloWorld />

      <Bomb />

      <RouletteGun />
    </main>
  );
}

export default App;
