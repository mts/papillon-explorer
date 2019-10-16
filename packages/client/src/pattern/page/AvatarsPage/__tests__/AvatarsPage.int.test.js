import React from 'react'
import { avatarsPageAsync, avatarsPageDefault } from './AvatarsPage.int.render'

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => {} }))
jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

const apolloReactHooksMockObject = require('@apollo/react-hooks')

describe('<AvatarsPage />', () => {
  const pagesDataObject = {
    data: {
      pages: {
        pages: [{ id: 'avatars', name: 'some-name' }],
      },
    },
  }

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match avatarsPageAsync', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue(pagesDataObject)
      expect(global.renderToJSON(avatarsPageAsync)).toMatchSnapshot()
    })

    test('must match avatarsPageDefault', () => {
      expect(global.renderToJSON(avatarsPageDefault)).toMatchSnapshot()
    })

    test('must match avatarsPageNull', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue({})
      expect(global.renderToJSON(avatarsPageDefault)).toMatchSnapshot()
    })
  })
})
