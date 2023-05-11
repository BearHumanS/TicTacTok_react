import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">game-info</div>
    </div>
  )
}

export default App
