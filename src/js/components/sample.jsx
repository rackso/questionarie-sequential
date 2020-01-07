import React, { Component } from "react"
import ReactDOM from "react-dom"
import $ from 'jquery'

import '../../scss/estilos.scss'

const ll = alfa => { return `${alfa}` }

class FormContainer extends Component {

  constructor() {
    super()
    this.state = {
      title: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    $('h1').each((idx, fn) => {console.log(fn)})
  }

  render() {
    return (
        <h1 className="tipo" onClick={this.handleChange}>Hola {ll('oscar')}</h1>
    )
  }
}

export default FormContainer

const wrapper = document.getElementById("app")
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false