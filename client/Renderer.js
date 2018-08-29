import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Renderer = ({ code, onError, ...rest }) => {
  try {
    const Component = code ? new Function(code) : null
    if (Component && typeof Component === 'function') {
      return (
        <Catcher onError={onError}>
          <Component {...rest} />
        </Catcher>
      )
    } else {
      onError('No function')
      return null
    }
  } catch (e) {
    onError(e.message)
    return null
  }
}

Renderer.propTypes = {
  code: PropTypes.string.isRequired,
  onError: PropTypes.func.isRequired
}

export default Renderer
