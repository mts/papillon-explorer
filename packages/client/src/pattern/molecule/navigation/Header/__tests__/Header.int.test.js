import { headerDefault } from './Header.int.render'

describe('<Header />', () => {
  describe('Snaphot', () => {
    test('must match headerDefault', () => {
      expect(global.renderToJSON(headerDefault)).toMatchSnapshot()
    })
  })
})
