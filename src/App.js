import React, { useState } from 'react'

import './App.css'
import Dino from './components/Dino';
import Road from './components/Road'
import Surround from './components/Surround';

const App = () => {
  const [startGame, setStartGame] = useState(false);
  return (
    <div className="container">
      <div className="game-container">
        { startGame ? <Surround /> : null}
        <Dino startGame={startGame} setStartGame={setStartGame}/>
        <Road />
      </div>
    </div>
  )
}

export default App
