import React from 'react'
import navigationPageDefault from './NavigationPage.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

jest.mock('react-apollo', () => {
  return {
    Query: () => <div />,
  }
})

describe('<NavigationPage />', () => {
  describe('Snaphot', () => {
    test('must match navigationPageDefault', () => {
      expect(global.renderToJSON(navigationPageDefault)).toMatchSnapshot()
    })
  })
})
