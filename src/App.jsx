import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Test from './test'
import { Reset } from 'styled-reset'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="game">
      <Test aprops="A" />
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">game-info</div>
    </div>
  )
}

export default App
