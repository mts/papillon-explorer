import React from 'react'
import breadcrumbTemplateDefault from './BreadcrumbTemplate.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<BreadcrumbTemplate />', () => {
  describe('Snaphot', () => {
    test('must match breadcrumbTemplateDefault', () => {
      expect(global.renderToJSON(breadcrumbTemplateDefault)).toMatchSnapshot()
    })
  })
})
