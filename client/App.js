import React, { Component, Fragment } from 'react'

import { LayoutContainer, Left, Right, Bottom } from './Layout'
import sampleCode from './sampleCode'
import Editor from './Editor'
import Transpiler from './Transpiler'
import Functionizer from './Functionizer'
import Catcher from './Catcher'

class App extends Component {
  state = {
    code: sampleCode,
  }

  handleChange = code => {
    this.setState({ code })
  }

  render() {
    return (
      <LayoutContainer>
        <Left>
          <Editor
            mode="javascript"
            theme="monokai"
            height="100%"
            width="100%"
            onChange={this.handleChange}
            value={this.state.code}
            name="editor"
            setOptions={{ useWorker: false }}
            editorProps={{ $blockScrolling: true }}
          />
        </Left>
        <Transpiler input={this.state.code}>
          {({ error: transpilerError, output: transpilerOutput }) => (
            <Functionizer input={transpilerOutput || ''}>
              {({ error: functionizerError, Component }) => (
                <Catcher>
                  {({ error: renderError }) => {
                    const errors = [
                      transpilerError,
                      functionizerError,
                      renderError,
                    ].filter(error => Boolean(error))
                    if (errors.length > 0) {
                      return (
                        <Bottom>
                          <pre>{errors.join('\n')}</pre>
                        </Bottom>
                      )
                    } else {
                      return (
                        <Fragment>
                          <Right>
                            <Component text="Hello" />
                          </Right>
                          <Bottom>
                            <pre>{transpilerOutput}</pre>
                          </Bottom>
                        </Fragment>
                      )
                    }
                  }}
                </Catcher>
              )}
            </Functionizer>
          )}
        </Transpiler>
      </LayoutContainer>
    )
  }
}

export default App
