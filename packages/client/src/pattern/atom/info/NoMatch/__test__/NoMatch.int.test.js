import { noMatchDefault } from './NoMatch.int.render'

describe('<NoMatch />', () => {
  describe('Snaphot', () => {
    test('must match noMatchDefault', () => {
      expect(global.renderToJSON(noMatchDefault)).toMatchSnapshot()
    })
  })
})
