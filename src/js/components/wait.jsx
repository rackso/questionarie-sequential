import React, { Component } from "react"

import '../../scss/waitforit.scss'


class WaitForIt extends Component {

  render() {
    return (
      <div className="waitforit">
        <div class="loading">
            <div class="loader"></div>
        </div>
      </div>
    )
  }
}

export default WaitForIt
