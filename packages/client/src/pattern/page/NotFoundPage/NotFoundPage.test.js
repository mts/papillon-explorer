import React from 'react'
import notFoundPageDefault from './NotFoundPage.render'

jest.mock('react-apollo', () => {
  return {
    Query: () => <div />,
  }
})

describe('<NotFoundPage />', () => {
  describe('Snaphot', () => {
    test('must match notFoundPageDefault', () => {
      expect(global.renderToJSON(notFoundPageDefault)).toMatchSnapshot()
    })
  })
})
