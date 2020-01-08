import React from "react"
import ReactDOM from "react-dom"

import App from "./js/components/app.jsx"

const wrapper = document.getElementById("app")
wrapper ? ReactDOM.render(<App />, wrapper) : false