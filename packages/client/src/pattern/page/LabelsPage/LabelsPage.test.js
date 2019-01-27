import React from 'react'
import labelsPageDefault from './LabelsPage.render'

jest.mock('react-apollo', () => {
  return {
    Query: () => <div />,
  }
})

describe('<LabelsPage />', () => {
  describe('Snaphot', () => {
    test('must match labelsPageDefault', () => {
      expect(global.renderToJSON(labelsPageDefault)).toMatchSnapshot()
    })
  })
})
