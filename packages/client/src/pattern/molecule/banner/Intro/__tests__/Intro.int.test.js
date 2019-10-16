import { introDefault } from './Intro.int.render'

describe('<Intro />', () => {
  describe('Snaphot', () => {
    test('must match introDefault', () => {
      expect(global.renderToJSON(introDefault)).toMatchSnapshot()
    })
  })
})
