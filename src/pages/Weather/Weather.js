import React, { Component } from 'react'
import { WeatherItem, InputBox, CustomModal } from 'containers'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as weatherActions from 'modules/weather'
import * as jsonActions from 'modules/json'

import cityJsonList from 'resource/current.city.list.json'

import { Loader, Radio, Grid, Modal } from 'semantic-ui-react'
import './Weather.scss'

class Weather extends Component {
  state = {
    cityName: '',
    inputSelection: true,
    confirmOpen: false
  }

  componentDidMount() {}

  render() {
    const { loading, error } = this.props
    const { inputSelection, confirmOpen } = this.state

    const inputOptionLeft = {
      style: {
        left: '50px'
      },
      inputState: true,
      placeholder: '도시이름입력'
    }
    const inputOptionRight = {
      location: 'right',
      inputState: false,
      placeholder: '도시이름입력'
    }

    const modalOptions = {
      headerIcon: 'cancel',
      headerMessage: '경고!!',
      message: '도시이름을 확인하세요',
      ok: this._confirmClose,
      moreButton: false,
      cancel: null
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
        {/* <Confirm open={this.state.confirmOpen} onConfirm={this._confirmClose} cancelButton='' content='도시이름을 확인해주세요' />` */}
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
        {confirmOpen ? this._modalOpen(modalOptions) : <div />}
      </div>
    )
  }
  _handleChange = e => {
    this.setState({
      cityName: e.target.value
    })
  }
  _fetchWeather = data => {
    console.log('체크', this._transString(data))

    this._transString(data) === -1 ? this.setState({ confirmOpen: true }) : this.loadData(data)
  }
  _changeInput = () => {
    this.setState({
      inputSelection: !this.state.inputSelection
    })
  }
  _transString = string => {
    const { JsonActions } = this.props
    const afterString = string.charAt(0).toUpperCase() + string.slice(1)

    const { payload } = JsonActions.getCityName(cityJsonList)
    console.log(payload)

    return payload.indexOf(afterString.replace(/\-/g, ''))
  }

  loadData = cityName => {
    const { WeatherActions } = this.props
    WeatherActions.getPost(cityName)
  }

  _renderWeather = weatherData => {
    console.log(weatherData)
    const id = Math.round(Math.random() * 100000)
    console.log(id)

    return <WeatherItem key={id} weatherData={weatherData} />
  }

  _confirmClose = () => {
    this.setState({
      confirmOpen: false
    })
  }

  _modalOpen = modalOptions => {
    return <CustomModal options={modalOptions} />
  }
}
export default connect(
  state => ({
    weather: state.weather.data,
    loading: state.weather.pending,
    error: state.weather.error,
    json: state.json
  }),
  dispatch => ({
    WeatherActions: bindActionCreators(weatherActions, dispatch),
    JsonActions: bindActionCreators(jsonActions, dispatch)
  })
)(Weather)
