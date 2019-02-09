import React from 'react'
import RouteWithSubRoutes from './RouteWithSubRoutes'
import { BrowserRouter } from 'react-router-dom'

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

const routeWithSubRoutesDefault = (
  <BrowserRouter>
    <RouteWithSubRoutes {...route} />
  </BrowserRouter>
)

export default routeWithSubRoutesDefault
