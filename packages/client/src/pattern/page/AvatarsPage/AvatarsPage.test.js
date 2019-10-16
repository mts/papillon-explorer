import React from 'react'
import { avatarsPageDefault } from './AvatarsPage.render'

jest.mock('@apollo/react-hooks', () => {
  return {
    useQuery: () => {
      return {
        data: {
          pages: {
            pages: [{ id: 'avatars', name: 'some-name' }],
          },
        },
      }
    },
  }
})

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<AvatarsPage />', () => {
  describe('Snaphot', () => {
    test('must match avatarsPageDefault', () => {
      expect(global.renderToJSON(avatarsPageDefault)).toMatchSnapshot()
    })
  })
})
