import React from 'react'
import { Route } from 'react-router-dom'
import { propTypes } from './RouteWithSubRoutes.props'

export const RouteWithSubRoutes = route => (
  <Route path={route.path} render={props => <route.component {...props} routes={route.routes} />} /> // eslint-disable-line
)

RouteWithSubRoutes.propTypes = propTypes
