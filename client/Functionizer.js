import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
global.React = React
const transform = input => state => {
  try {
    const Component = eval(input)
    return {
      ...state,
      Component,
      error: null
    }
  } catch (e) {
    const error = `Functionizer: ${e.message}`
    return {
      ...state,
      error
    }
  }
}

class Functionizer extends Component {
  constructor(props) {
    super(props)
    this.state = transform(props.input)({})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.input !== this.props.input) {
      this.setState(transform(nextProps.input))
    }
  }

  render() {
    return this.props.children(this.state)
  }
}

Functionizer.propTypes = {
  input: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

export default Functionizer
