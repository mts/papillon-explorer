import { errorBoundaryDefault } from './ErrorBoundary.int.render'

describe('<ErrorBoundary />', () => {
  describe('Snaphot', () => {
    test('must match errorBoundaryDefault', () => {
      expect(global.renderToJSON(errorBoundaryDefault)).toMatchSnapshot()
    })
  })
})
