import React from 'react'
import { Image } from 'semantic-ui-react'
import { bono } from 'resource'

const Home = () => {
  return (
    <div>
      <h3 className="center">홈입니다.</h3>
      <Image src={bono} size="large" centered />
      <Image src={bono} size="large" centered />
      <Image src={bono} size="large" centered />
    </div>
  )
}

export default Home
