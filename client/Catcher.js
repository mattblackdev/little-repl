import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Catcher extends Component {
  state = {
    error: null
  }

  componentWillReceiveProps() {
    this.setState({ error: null })
  }

  componentDidCatch(e) {
    const error = `Catcher: ${e.message}`
    this.setState({ error })
  }

  render() {
    return this.props.children(this.state)
  }
}

Catcher.propTypes = {
  children: PropTypes.func.isRequired
}

export default Catcher
