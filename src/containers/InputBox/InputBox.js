import React, { Component } from 'react'
import { Input, Icon, Form } from 'semantic-ui-react'

export default class InputBox extends Component {
  state = {
    inputData: '',
    inputState: this.props.option.inputState
  }
  render() {
    const { option } = this.props
    const { inputState } = this.state

    return (
      <Form onSubmit={this._handleSubmit}>
        <Form.Field inline>
          {inputState ? (
            <Input
              className={option.location}
              icon={<Icon name="search" inverted circular link onClick={this._handleSubmit} />}
              onChange={this._handleChange}
              placeholder={option.placeholder}
              value={this.state.inputData}
            />
          ) : (
            <Input
              className={option.location}
              icon={<Icon name="search" inverted circular link onClick={this._handleSubmit} />}
              placeholder={option.placeholder}
            />
          )}
        </Form.Field>
      </Form>
    )
  }
  _handleChange = e => {
    this.setState({
      inputData: e.target.value
    })
  }
  _handleSubmit = e => {
    const { inputData, inputState } = this.state
    const data = inputState ? inputData : e.target[0].value

    this.props.submit(data)
    this.setState({
      inputData: ''
    })
    e.target[0].value = ''
  }
}
