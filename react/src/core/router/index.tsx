import React from 'react'
import { Switch } from 'react-router-dom'
import {
  MakeDashboardFactory,
  MakeLoginFactory,
  MakeTaskListingFactory,
  MakeTaskRegistrationFactory,
  MakeUserRegistrationFactory,
} from 'core/factories'
import Route from './routes'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={MakeLoginFactory} />
    <Route path="/dashboard" component={MakeDashboardFactory} isPrivate />
    <Route path="/sign-up" component={MakeUserRegistrationFactory} />
    <Route
      path="/listar-tarefas"
      component={MakeTaskListingFactory}
      isPrivate
    />
    <Route
      path="/cadastrar-tarefas"
      component={MakeTaskRegistrationFactory}
      isPrivate
    />
    <Route path="/" component={MakeLoginFactory} />
  </Switch>
)

export default Routes
