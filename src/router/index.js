import React from 'react'
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom'

import { Home, Weather } from 'pages'

const Routes = () => {
  return (
    <BrowserRouter basename='/git-page-test'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/weather" component={Weather} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
