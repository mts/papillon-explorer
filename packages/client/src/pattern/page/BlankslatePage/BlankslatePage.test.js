import React from 'react'
import { blankslatePageAsync, blankslatePageDefault } from './BlankslatePage.render'

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => {} }))
jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

const apolloReactHooksMockObject = require('@apollo/react-hooks')

describe('<BlankslatePage />', () => {
  const pagesDataObject = {
    data: {
      pages: {
        pages: [{ id: 'blankslate', name: 'some-name' }],
      },
    },
  }

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match blankslatePageAsync', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue(pagesDataObject)
      expect(global.renderToJSON(blankslatePageAsync)).toMatchSnapshot()
    })

    test('must match blankslatePageDefault', () => {
      expect(global.renderToJSON(blankslatePageDefault)).toMatchSnapshot()
    })

    test('must match blankslatePageNull', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue({})
      expect(global.renderToJSON(blankslatePageDefault)).toMatchSnapshot()
    })
  })
})
