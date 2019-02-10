import noMatchDefault from './NoMatch.render'

describe('<NoMatch />', () => {
  describe('Snaphot', () => {
    test('must match noMatchDefault', () => {
      expect(global.renderToJSON(noMatchDefault)).toMatchSnapshot()
    })
  })
})
