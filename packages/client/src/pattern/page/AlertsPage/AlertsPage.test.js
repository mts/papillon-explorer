import React from 'react'
import { alertsPageAsync, alertsPageDefault } from './AlertsPage.render'

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => {} }))
jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

const apolloReactHooksMockObject = require('@apollo/react-hooks')

describe('<AlertsPage />', () => {
  const pagesDataObject = {
    data: {
      pages: {
        pages: [{ id: 'alerts', name: 'some-name' }],
      },
    },
  }

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match alertsPageAsync', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue(pagesDataObject)
      expect(global.renderToJSON(alertsPageAsync)).toMatchSnapshot()
    })

    test('must match alertsPageDefault', () => {
      expect(global.renderToJSON(alertsPageDefault)).toMatchSnapshot()
    })

    test('must match alertsPageNull', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue({})
      expect(global.renderToJSON(alertsPageDefault)).toMatchSnapshot()
    })
  })
})
