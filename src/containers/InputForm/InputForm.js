import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const selectOptions = [
  {
    key: 'o',
    text: '공개',
    value: 'public'
  },
  {
    key: 'p',
    text: '비공개',
    value: 'private'
  }
]

class InputForm extends Component {
  state = {
    title: '',
    password: '',
    select: '',
    contents: ''
  }
  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="제목"
            placeholder="제목 입력"
            type="text"
            name="title"
            onChange={this._handleChange}
          />
          <Form.Select
            fluid
            label="공개/비공개 여부"
            options={selectOptions}
            placeholder="선택"
            name="select"
            onChange={this._handleChange}
          />
          <Form.Input
            fluid
            label="비밀번호"
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={this._handleChange}
          />
        </Form.Group>
        <Form.TextArea
          label="내용"
          placeholder="내용을 적어주세요"
          name="contents"
          onChange={this._handleChange}
        />
        <Form.Button onClick={this._handleSubmit}>Submit</Form.Button>
      </Form>
    )
  }
  _handleSubmit = () => {
    this.props.options({ data: this.state })
  }
  _handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    })
  }
}

export default InputForm
