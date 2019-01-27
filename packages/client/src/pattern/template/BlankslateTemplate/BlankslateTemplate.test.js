import React from 'react'
import blankslateTemplateDefault from './BlankslateTemplate.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<BlankslateTemplate />', () => {
  describe('Snaphot', () => {
    test('must match blankslateTemplateDefault', () => {
      expect(global.renderToJSON(blankslateTemplateDefault)).toMatchSnapshot()
    })
  })
})
