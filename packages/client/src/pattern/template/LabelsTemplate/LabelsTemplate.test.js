import React from 'react'
import labelsTemplateDefault from './LabelsTemplate.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<LabelsTemplate />', () => {
  describe('Snaphot', () => {
    test('must match labelsTemplateDefault', () => {
      expect(global.renderToJSON(labelsTemplateDefault)).toMatchSnapshot()
    })
  })
})
