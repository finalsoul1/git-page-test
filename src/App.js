import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Gnb } from 'containers'
import Routes from 'router'

import './App.scss'

class App extends Component {
  state = {
    width: ''
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter basename="/git-page-test">
          <br/>
          <h1 className='center' >React 연습 Page</h1>
          <Gnb width={this.state.width} />
          <Routes />
        </BrowserRouter>
      </div>
    )
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth
    })
  }
}

export default App
