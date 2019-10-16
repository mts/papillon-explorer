import React from 'react'
import { breadcrumbPageAsync, breadcrumbPageDefault } from './BreadcrumbPage.int.render'

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => {} }))
jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

const apolloReactHooksMockObject = require('@apollo/react-hooks')

describe('<BreadcrumbPage />', () => {
  const pagesDataObject = {
    data: {
      pages: {
        pages: [{ id: 'breadcrumb', name: 'some-name' }],
      },
    },
  }

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match breadcrumbPageAsync', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue(pagesDataObject)
      expect(global.renderToJSON(breadcrumbPageAsync)).toMatchSnapshot()
    })

    test('must match breadcrumbPageDefault', () => {
      expect(global.renderToJSON(breadcrumbPageDefault)).toMatchSnapshot()
    })

    test('must match breadcrumbPageNull', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue({})
      expect(global.renderToJSON(breadcrumbPageDefault)).toMatchSnapshot()
    })
  })
})
