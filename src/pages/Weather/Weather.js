import React, { Component } from 'react'
import { WeatherItem, InputBox } from 'containers'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as weatherActions from 'modules/weather'

import { Loader, Radio, Grid } from 'semantic-ui-react'
import './Weather.scss'

class Weather extends Component {
  state = {
    cityName: '',
    inputSelection: true
  }

  render() {
    const { loading, error } = this.props
    const { inputSelection } = this.state

    const inputOptionLeft = {
      location: 'left',
      inputState: true,
      placeholder: '도시이름입력'
    }
    const inputOptionRight = {
      location: 'right',
      inputState: false,
      placeholder: '도시이름입력'
    }

    return (
      <div className="Weather">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              {inputSelection ? (
                <InputBox submit={this._fetchWeather} option={inputOptionLeft} />
              ) : (
                <div />
              )}
            </Grid.Column>
            <Grid.Column>
              <Radio className="inputSelection" slider onChange={this._changeInput} />
            </Grid.Column>
            <Grid.Column>
              {inputSelection ? (
                <div />
              ) : (
                <InputBox submit={this._fetchWeather} option={inputOptionRight} />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <br />
        <div className="weatherBox">
          {loading ? (
            <Loader size="massive" active inline="centered" />
          ) : error ? (
            <h2>에러</h2>
          ) : (
            this.props.weather.map(this._renderWeather)
          )}
        </div>
      </div>
    )
  }
  _handleChange = e => {
    this.setState({
      cityName: e.target.value
    })
  }
  _fetchWeather = data => {
    this.loadData(data)
  }
  _changeInput = () => {
    this.setState({
      inputSelection: !this.state.inputSelection
    })
  }

  loadData = cityName => {
    const { WeatherActions } = this.props
    WeatherActions.getPost(cityName)
  }

  _renderWeather(weatherData) {
    console.log(weatherData)
    const id = Math.round(Math.random() * 100000)
    console.log(id)

    return <WeatherItem key={id} weatherData={weatherData} />
  }
}
export default connect(
  state => ({
    weather: state.weather.data,
    loading: state.weather.pending,
    error: state.weather.error
  }),
  dispatch => ({
    WeatherActions: bindActionCreators(weatherActions, dispatch)
  })
)(Weather)
