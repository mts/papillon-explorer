import React from 'react'
import RouteWithSubRoutes from './RouteWithSubRoutes'

const SomeComponent = () => <div />
const SomeOtherComponentOne = () => <div />
const SomeOtherComponentTwo = () => <div />

const route = {
  path: '/some-path',
  exact: true,
  component: SomeComponent,
  routes: [
    {
      path: '/some-other-path-one',
      exact: true,
      component: SomeOtherComponentOne,
    },
    {
      path: '/some-other-path-one',
      exact: true,
      component: SomeOtherComponentTwo,
    },
  ],
}

const routeWithSubRoutesDefault = <RouteWithSubRoutes route={route} />

export default routeWithSubRoutesDefault
