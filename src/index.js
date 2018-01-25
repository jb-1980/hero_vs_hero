import React from "react"
import { render } from "react-dom"
import Hero from "./Hero"
import BattleBar from "./BattleBar"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
}

class App extends React.Component {
  state = { points: 10, gameOver: false }

  incrementPoints = () =>
    this.setState(prevState => {
      if (prevState.points <= 0 || prevState.points >= 20) {
        return { gameOver: true }
      }
      return { points: prevState.points + 1 }
    })

  decrementPoints = () =>
    this.setState(prevState => {
      if (prevState.points <= 0 || prevState.points >= 20) {
        return { gameOver: true }
      }
      return { points: prevState.points - 1 }
    })

  resetGame = () => this.setState({ points: 10, gameOver: false })

  render() {
    const { points, gameOver } = this.state

    return (
      <div style={styles}>
        <h2>Click your hero to make him win!</h2>
        <Hero
          clickHandler={gameOver ? () => null : this.incrementPoints}
          src="https://res.cloudinary.com/jgilgen/image/upload/w_200,h_200/captain-america_eq86l3.png"
        />
        <Hero
          clickHandler={this.decrementPoints}
          src="https://res.cloudinary.com/jgilgen/image/upload/w_200,h_200/iron-man_buqxls.png"
        />
        <BattleBar points={points} resetGame={this.resetGame} />
      </div>
    )
  }
}

render(<App />, document.getElementById("root"))
