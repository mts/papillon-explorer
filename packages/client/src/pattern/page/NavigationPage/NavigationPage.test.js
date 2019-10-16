import React from 'react'
import { navigationPageAsync, navigationPageDefault } from './NavigationPage.render'

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => {} }))
jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

const apolloReactHooksMockObject = require('@apollo/react-hooks')

describe('<NavigationPage />', () => {
  const pagesDataObject = {
    data: {
      pages: {
        pages: [{ id: 'navigation', name: 'some-name' }],
      },
    },
  }

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match navigationPageAsync', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue(pagesDataObject)
      expect(global.renderToJSON(navigationPageAsync)).toMatchSnapshot()
    })

    test('must match navigationPageDefault', () => {
      expect(global.renderToJSON(navigationPageDefault)).toMatchSnapshot()
    })

    test('must match navigationPageNull', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue({})
      expect(global.renderToJSON(navigationPageDefault)).toMatchSnapshot()
    })
  })
})
