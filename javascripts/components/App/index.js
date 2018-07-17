'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const PropTypes = require('prop-types')
const { Component } = React

class App extends Component {
  render() {
    return <div>{ this.props.children }</div>
  }
}

module.exports = App
