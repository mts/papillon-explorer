import React from 'react'
import alertsTemplateDefault from './AlertsTemplate.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<AlertsTemplate />', () => {
  describe('Snaphot', () => {
    test('must match alertsTemplateDefault', () => {
      expect(global.renderToJSON(alertsTemplateDefault)).toMatchSnapshot()
    })
  })
})
