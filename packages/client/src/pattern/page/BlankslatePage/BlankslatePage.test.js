import React from 'react'
import blankslatePageDefault from './BlankslatePage.render'

jest.mock('react-apollo', () => {
  return {
    Query: () => <div />,
  }
})

describe('<BlankslatePage />', () => {
  describe('Snaphot', () => {
    test('must match blankslatePageDefault', () => {
      expect(global.renderToJSON(blankslatePageDefault)).toMatchSnapshot()
    })
  })
})
