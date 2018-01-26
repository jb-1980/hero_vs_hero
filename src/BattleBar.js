import React from "react"
import "./App.css"

const BattleBar = ({ points, resetGame }) => {
  if (points >= 20) {
    return (
      <div>
        <h2>The captain wins!</h2>
        <button onClick={resetGame}>Restart</button>
      </div>
    )
  }

  if (points <= 0) {
    return (
      <div>
        <h2>Iron Man wins!</h2>
        <button onClick={resetGame}>Restart</button>
      </div>
    )
  }

  return (
    <div className="battle-bar">
      <div
        className="progress-bar"
        style={{
          width: `${points / 20 * 100}%`,
          backgroundColor: "blue",
        }}
      />
      <div
        className="progress-bar"
        style={{
          width: `${(20 - points) / 20 * 100}%`,
          backgroundColor: "red",
        }}
      />
    </div>
  )
}

export default BattleBar
