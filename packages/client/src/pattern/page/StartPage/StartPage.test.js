import React from 'react'
import startPageDefault from './StartPage.render'

jest.mock('react-apollo', () => {
  return {
    Query: () => <div />,
  }
})

describe('<StartPage />', () => {
  describe('Snaphot', () => {
    test('must match startPageDefault', () => {
      expect(global.renderToJSON(startPageDefault)).toMatchSnapshot()
    })
  })
})
