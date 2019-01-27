import React from 'react'
import navigationTemplateDefault from './NavigationTemplate.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<NavigationTemplate />', () => {
  describe('Snaphot', () => {
    test('must match navigationTemplateDefault', () => {
      expect(global.renderToJSON(navigationTemplateDefault)).toMatchSnapshot()
    })
  })
})
