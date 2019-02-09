import introDefault from './Intro.render'

describe('<Intro />', () => {
  describe('Snaphot', () => {
    test('must match introDefault', () => {
      expect(global.renderToJSON(introDefault)).toMatchSnapshot()
    })
  })
})
