import React from 'react'
import { startPageAsync, startPageDefault } from './StartPage.int.render'

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => {} }))
jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

const apolloReactHooksMockObject = require('@apollo/react-hooks')

describe('<StartPage />', () => {
  const pagesDataObject = {
    data: {
      pages: {
        pages: [{ id: 'start', name: 'some-name' }],
      },
    },
  }

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match startPageAsync', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue(pagesDataObject)
      expect(global.renderToJSON(startPageAsync)).toMatchSnapshot()
    })

    test('must match startPageDefault', () => {
      expect(global.renderToJSON(startPageDefault)).toMatchSnapshot()
    })

    test('must match startPageNull', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue({})
      expect(global.renderToJSON(startPageDefault)).toMatchSnapshot()
    })
  })
})
