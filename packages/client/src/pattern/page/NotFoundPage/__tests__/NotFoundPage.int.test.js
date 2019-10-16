import React from 'react'
import { notFoundPageAsync, notFoundPageDefault } from './NotFoundPage.int.render'

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => {} }))
jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

const apolloReactHooksMockObject = require('@apollo/react-hooks')

describe('<NotFoundPage />', () => {
  const pagesDataObject = {
    data: {
      pages: {
        pages: [{ id: 'not-found', name: 'some-name' }],
      },
    },
  }

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match notFoundPageAsync', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue(pagesDataObject)
      expect(global.renderToJSON(notFoundPageAsync)).toMatchSnapshot()
    })

    test('must match notFoundPageDefault', () => {
      expect(global.renderToJSON(notFoundPageDefault)).toMatchSnapshot()
    })

    test('must match notFoundPageNull', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue({})
      expect(global.renderToJSON(notFoundPageDefault)).toMatchSnapshot()
    })
  })
})
