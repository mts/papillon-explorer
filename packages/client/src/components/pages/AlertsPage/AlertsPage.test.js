import React from 'react';
import alertsPageDefault from './AlertsPage.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />
  }
});

describe('<AlertsPage />', () => {
  describe('Snaphot', () => {
    test('must match alertsPageDefault', () => {
      expect(global.renderToJSON(alertsPageDefault)).toMatchSnapshot()
    })
  })
})
