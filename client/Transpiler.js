import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Babel from '@babel/standalone'
Babel.disableScriptTags()

const transform = input => state => {
  try {
    const output = Babel.transform(input, {
      presets: ['react']
    }).code
    if (output && typeof output === 'string') {
      return {
        output,
        error: null
      }
    } else {
      return {
        output: null,
        error: 'Transpiler: output must be a string'
      }
    }
  } catch (e) {
    const error = `Transpiler: ${e.message}`
    return {
      output: null,
      error
    }
  }
}

class Transpiler extends Component {
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

Transpiler.propTypes = {
  input: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

export default Transpiler
