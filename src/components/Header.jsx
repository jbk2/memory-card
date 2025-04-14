export default function Header({ currentScore, bestScore }) {
  return (
    <header>
      <h1>Dachshund Memory Game</h1>
      <div id="scoreboard">
        <h4>Current score: {currentScore} </h4>
        <h4>Best score: {bestScore}</h4>
      </div>
    </header>
  )
}