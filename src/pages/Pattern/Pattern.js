import React from 'react'
import { Image, Divider, Icon, Header, Container, Segment, Grid } from 'semantic-ui-react'

import { fluxandredux, flux, mvc } from 'resource'

const Pattern = () => {
  return (
    <Container>
      <Segment placeholder>
        <br />
        <br />
        <Divider horizontal>
          <Header as="h4">
            <Icon name="angle down" />
            MVC
          </Header>
        </Divider>
        <Image src={mvc} size="big" centered />
        <br />
        <br />
        <Divider horizontal>
          <Header as="h4">
            <Icon name="angle down" />
            FLUX
          </Header>
        </Divider>
        <Image src={flux} size="big" centered />
        <br />
        <br />
        <Divider horizontal>
          <Header as="h4">
            <Icon name="angle down" />
            FLUX VS REDUX
          </Header>
        </Divider>
        <Image
          as="a"
          src={fluxandredux}
          href="https://bestalign.github.io/2015/10/26/cartoon-intro-to-redux/"
          target='_blank'
          size="big"
          centered
        />
        <br />
        <br />
      </Segment>
    </Container>
  )
}

export default Pattern
