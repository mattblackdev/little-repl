import React, { Component, Fragment } from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

const Editor = props => <AceEditor {...props} />
export default Editor
