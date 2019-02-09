import underConstructionDefault from './UnderConstruction.render'

describe('<UnderConstruction />', () => {
  describe('Snaphot', () => {
    test('must match underConstructionDefault', () => {
      expect(global.renderToJSON(underConstructionDefault)).toMatchSnapshot()
    })
  })
})
