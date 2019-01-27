import React from 'react'
import buttonsTemplateDefault from './ButtonsTemplate.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<ButtonsTemplate />', () => {
  describe('Snaphot', () => {
    test('must match buttonsTemplateDefault', () => {
      expect(global.renderToJSON(buttonsTemplateDefault)).toMatchSnapshot()
    })
  })
})
