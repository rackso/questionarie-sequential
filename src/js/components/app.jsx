import React, { Component } from "react"

import WaitForIt from './wait.jsx'
import Followme from './followme.jsx'
import Preguntas from './preguntas.jsx'
import Presentation from './presentation.jsx'
import Resultado from './resultado.jsx'

import UseCases from '../usecases.js'

import '../../scss/questionaire.scss'

class FormContainer extends Component {

  constructor() {
    super()
    this.state = {
        data: undefined,
        level: 0
    }
  }

  componentDidMount () {
    const {level} = this.state

    UseCases.getAllData()
        .then(data => this.setState({ data, level: level + 1 }))
  }

  nextSection () {
      debugger
      this.setState({ level: this.state.level++ })
  }

  render() {
    const {data, level} = this.state

    console.log(data, level)

    // Levels
    // 0: Spinner mientras se carga
    // 1: presentamos la cantidad de preguntas y el título
    // 2: llamamos a coger las N preguntas y las mostramos una a una
    // 3: damos el resultado y pedimos el twitter
    // 4: recordamos el follow si quiere ver el desglose de preguntas y estar en el ranking
    return (
        <div className="questionaire">
            {level === 0 && <WaitForIt />}
            {level === 1 && data && <Presentation data={data} onNext={this.nextSection} />}
            {level === 2 && <Preguntas onNext={this.nextSection} />}
            {level === 3 && <Resultado onNext={this.nextSection} />}
            {level === 4 && <Followme />}
        </div>
    )
  }
}

export default FormContainer
