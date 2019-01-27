import React from 'react'
import layoutTemplateDefault from './LayoutTemplate.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<LayoutTemplate />', () => {
  describe('Snaphot', () => {
    test('must match layoutTemplateDefault', () => {
      expect(global.renderToJSON(layoutTemplateDefault)).toMatchSnapshot()
    })
  })
})
