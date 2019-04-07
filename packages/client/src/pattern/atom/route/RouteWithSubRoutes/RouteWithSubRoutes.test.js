import React from 'react'
import routeWithSubRoutesDefault from './RouteWithSubRoutes.render'

jest.mock('react-router-dom', () => {
  return {
    Route: () => <div />,
  }
})
describe('<RouteWithSubRoutes />', () => {
  describe('Snaphot', () => {
    test('must match routeWithSubRoutesDefault', () => {
      expect(global.renderToJSON(routeWithSubRoutesDefault)).toMatchSnapshot()
    })
  })
})
