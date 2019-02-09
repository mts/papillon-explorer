import headerDefault from './Header.render'

describe('<Header />', () => {
  describe('Snaphot', () => {
    test('must match headerDefault', () => {
      expect(global.renderToJSON(headerDefault)).toMatchSnapshot()
    })
  })
})
