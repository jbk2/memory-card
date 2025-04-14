export default function Header({ score }) {
  return (
    <header>
      <h1>Dachshund Memory Game</h1>
      <div id="scoreboard">
        <h4>Score: {score} </h4>
        <h4>Best Score:</h4>
      </div>
    </header>
  )
}