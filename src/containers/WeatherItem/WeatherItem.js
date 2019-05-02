import React from 'react'

import { GoogleMapView } from 'containers'

import { Grid, Image } from 'semantic-ui-react'
import { bono } from 'imgs'

const WeatherItem = ({weatherData}) => {
  console.log('웨더아이템', weatherData.city);
  
  const { lon, lat } = weatherData.city.coord

  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <GoogleMapView
            lon={lon}
            lat={lat}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Grid.Column>
        <Grid.Column>
          <Image src={bono} size="small" centered />
        </Grid.Column>
        <Grid.Column>
          <Image src={bono} size="small" centered />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

WeatherItem.defaultProps = {
  loading: false,
  weatherData: {
    city: {
      lon: 0,
      lat: 0
    }
  }
}

export default WeatherItem
