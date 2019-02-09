import routeWithSubRoutesDefault from './RouteWithSubRoutes.render'

describe('<RouteWithSubRoutes />', () => {
  describe('Snaphot', () => {
    test('must match routeWithSubRoutesDefault', () => {
      expect(global.renderToJSON(routeWithSubRoutesDefault)).toMatchSnapshot()
    })
  })
})
