import React from 'react'
import { layoutPageAsync, layoutPageDefault } from './LayoutPage.int.render'

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => {} }))
jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

const apolloReactHooksMockObject = require('@apollo/react-hooks')

describe('<LayoutPage />', () => {
  const pagesDataObject = {
    data: {
      pages: {
        pages: [{ id: 'layout', name: 'some-name' }],
      },
    },
  }

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match layoutPageAsync', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue(pagesDataObject)
      expect(global.renderToJSON(layoutPageAsync)).toMatchSnapshot()
    })

    test('must match layoutPageDefault', () => {
      expect(global.renderToJSON(layoutPageDefault)).toMatchSnapshot()
    })

    test('must match layoutPageNull', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue({})
      expect(global.renderToJSON(layoutPageDefault)).toMatchSnapshot()
    })
  })
})
