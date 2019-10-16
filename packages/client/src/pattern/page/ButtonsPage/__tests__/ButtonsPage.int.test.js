import React from 'react'
import { buttonsPageAsync, buttonsPageDefault } from './ButtonsPage.int.render'

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => {} }))
jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

const apolloReactHooksMockObject = require('@apollo/react-hooks')

describe('<ButtonsPage />', () => {
  const pagesDataObject = {
    data: {
      pages: {
        pages: [{ id: 'buttons', name: 'some-name' }],
      },
    },
  }

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match buttonsPageAsync', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue(pagesDataObject)
      expect(global.renderToJSON(buttonsPageAsync)).toMatchSnapshot()
    })

    test('must match buttonsPageDefault', () => {
      expect(global.renderToJSON(buttonsPageDefault)).toMatchSnapshot()
    })

    test('must match buttonsPageNull', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue({})
      expect(global.renderToJSON(buttonsPageDefault)).toMatchSnapshot()
    })
  })
})
