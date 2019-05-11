import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, Weather, Pattern, Todo } from 'pages'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/weather" component={Weather} />
      <Route exact path="/pattern" component={Pattern} />
      <Route exact path="/todo" component={Todo} />
    </Switch>
  )
}

export default Routes
