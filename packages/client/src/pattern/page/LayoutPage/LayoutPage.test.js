import React from 'react'
import layoutPageDefault from './LayoutPage.render'

jest.mock('react-apollo', () => {
  return {
    Query: () => <div />,
  }
})

describe('<LayoutPage />', () => {
  describe('Snaphot', () => {
    test('must match layoutPageDefault', () => {
      expect(global.renderToJSON(layoutPageDefault)).toMatchSnapshot()
    })
  })
})
