import React from 'react'
import { Route } from 'react-router-dom'
import { routeShape } from '../../../../route/shape'

const RouteWithSubRoutes = route => <Route path={route.path} render={props => <route.component {...props} routes={route.routes} />} />

RouteWithSubRoutes.propTypes = {
  route: routeShape.isRequired,
}

export default RouteWithSubRoutes
