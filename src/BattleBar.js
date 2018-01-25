import React from "react"

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
    <div
      style={{
        width: 400,
        height: 20,
        margin: "auto",
        borderRadius: 20,
        border: "3px solid green",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${points / 20 * 100}%`,
          height: 20,
          background: "red",
        }}
      />
    </div>
  )
}

export default BattleBar
