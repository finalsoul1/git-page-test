import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from 'modules/todo'

import { InputBox, TodoList, InputForm } from 'containers'

import { Container, Card, Transition, Divider } from 'semantic-ui-react'

class Todo extends Component {
  state = {
    inputFocus: false,
    isData: false
  }
  render() {
    const inputOptionLeft = {
      style: {},
      inputState: true,
      placeholder: '할일 입력',
      focused: this.inputBoxFocused
    }

    const { inputFocus, isData } = this.state
    return (
      <Container style={{ width: '700px' }}>
        {inputFocus ? <div /> : <InputBox option={inputOptionLeft} />}

        <Transition visible={inputFocus} animation="fade" duration={500}>
          <Container style={{ backgroundColor: '#E0E0D4', padding: '10px', borderRadius: '5px' }}>
            <InputForm options={this.formSubmit} />
          </Container>
        </Transition>
        <Divider />
        {isData ? this._renderMemo(this.props.todo) : <div />}
      </Container>
    )
  }
  inputBoxFocused = () => {
    console.log('포커스됨')
    this.setState({
      inputFocus: true
    })
  }
  formSubmit = data => {
    this.props.TodoActions.getTodo(data)
    this.setState({
      inputFocus: false,
      isData: true
    })
  }
  _renderMemo = data => {
    return <TodoList todoData={data} />
  }
}

export default connect(
  state => ({
    todo: state.todo.data
  }),
  dispatch => ({
    TodoActions: bindActionCreators(todoActions, dispatch)
  })
)(Todo)
