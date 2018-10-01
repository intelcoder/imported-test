import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  Home,
} from 'Pages'

import AgentPage from 'Pages/agents'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/agents" component={AgentPage} />
  </Switch>
)

export default Routes
