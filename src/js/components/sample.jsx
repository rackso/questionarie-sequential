import React, { Component } from "react"
import ReactDOM from "react-dom"
import '../../scss/estilos.scss';

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
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return (
        <h1 className="tipo">Hola {ll('oscar')}</h1>
    )
  }
}

export default FormContainer

const wrapper = document.getElementById("app")
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false