import React, { Component } from "react"
import ReactDOM from "react-dom"

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
        <h1>Hola {ll('oscar')}</h1>
    )
  }
}

export default FormContainer

const wrapper = document.getElementById("create-article-form")
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false