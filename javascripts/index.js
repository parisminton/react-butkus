'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./components/App')
const Bout = require('./components/Bout')

const myApp = <App>
  <Bout />
</App>

ReactDOM.render(myApp, document.getElementById('content'))
