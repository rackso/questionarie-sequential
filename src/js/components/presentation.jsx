import React, { Component } from "react"
import PropTypes from 'prop-types'

import '../../scss/presentation.scss'

class Presentation extends Component {

  handleButtonClick () {
    const {onNext} = this.props
    onNext()
  }

  render() {
    const {numquestions, image, text, titular} = this.props
    return (
      <div className="presentation">
        {image &&
          <div className="imgcrop">
              <img src={image} />
          </div>
        }
        {titular && <p className="titular">{titular}</p>}
        {text && <p className="text">{text}</p>}
        <p className="numquestions">Te vamos a hacer un total de {numquestions} preguntas</p>
        <div className="button" onClick={() => this.handleButtonClick()}>Quiero jugar</div>
      </div>
    )
  }
}

Presentation.propTypes = {
  numquestions: PropTypes.number.isRequired,
  image: PropTypes.string,
  text: PropTypes.string,
  titular: PropTypes.string,
  onNext: PropTypes.func.isRequired
}

export default Presentation
