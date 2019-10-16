import React from 'react'
import { alertsPageDefault } from './AlertsPage.render'

jest.mock('@apollo/react-hooks', () => {
  return {
    useQuery: () => {
      return {
        data: {
          pages: {
            pages: [{ id: 'alerts', name: 'some-name' }],
          },
        },
      }
    },
  }
})

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<AlertsPage />', () => {
  describe('Snaphot', () => {
    test('must match alertsPageDefault', () => {
      expect(global.renderToJSON(alertsPageDefault)).toMatchSnapshot()
    })
  })
})
