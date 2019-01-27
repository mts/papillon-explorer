import React from 'react'
import breadcrumbPageDefault from './BreadcrumbPage.render'

jest.mock('react-apollo', () => {
  return {
    Query: () => <div />,
  }
})

describe('<BreadcrumbPage />', () => {
  describe('Snaphot', () => {
    test('must match breadcrumbPageDefault', () => {
      expect(global.renderToJSON(breadcrumbPageDefault)).toMatchSnapshot()
    })
  })
})
