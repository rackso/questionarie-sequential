import React, { Component } from "react"

import WaitForIt from './wait.jsx'
import Followme from './followme.jsx'
import Preguntas from './preguntas.jsx'
import Presentation from './presentation.jsx'
import Resultado from './resultado.jsx'

import UseCases from '../usecases.js'

import '../../scss/app.scss'

class App extends Component {

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
      this.setState({ level: this.state.level++ })
  }

  render() {
    const {data, level} = this.state
    if (typeof data === 'undefined') return null

    const { text, titular, imagen, defaultintroimage } = data

    // Levels
    // 0: Spinner mientras se carga
    // 1: presentamos la cantidad de preguntas y el título
    // 2: llamamos a coger las N preguntas y las mostramos una a una
    // 3: damos el resultado y pedimos el twitter
    // 4: recordamos el follow si quiere ver el desglose de preguntas y estar en el ranking
    return (
        <div className="app">
            {level === 0 && <WaitForIt />}
            {level === 1 &&
              <Presentation
                numquestions={data.questions.length}
                image={imagen || defaultintroimage}
                text={text}
                titular={titular}
                onNext={this.nextSection}
              />
            }
            {level === 2 &&
              <Preguntas
                onNext={this.nextSection}
              />
            }
            {level === 3 &&
              <Resultado
                onNext={this.nextSection}
              />
            }
            {level === 4 &&
              <Followme />
            }
        </div>
    )
  }
}

export default App
