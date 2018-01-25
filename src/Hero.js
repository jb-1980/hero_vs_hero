import React from "react"
import PropTypes from "prop-types"

const Hero = ({ src, clickHandler }) => <img onClick={clickHandler} src={src} />

Hero.propTypes = {
  src: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
}

export default Hero
