import React from 'react'
import buttonsPageDefault from './ButtonsPage.render'

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

describe('<ButtonsPage />', () => {
  describe('Snaphot', () => {
    test('must match buttonsPageDefault', () => {
      expect(global.renderToJSON(buttonsPageDefault)).toMatchSnapshot()
    })
  })
})
