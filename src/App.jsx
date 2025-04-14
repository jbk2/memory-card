import { useState } from 'react'
import GameBoard from './components/GameBoard.jsx'
import Header from './components/Header.jsx'
import './App.css'

function App() {
  const [ score, setScore ] = useState(0)

  return (
    <>
      <Header score={score} />
      <GameBoard />
    </>
  )
}

export default App
