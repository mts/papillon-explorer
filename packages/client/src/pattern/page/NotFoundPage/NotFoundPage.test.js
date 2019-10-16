import React from 'react'
import { notFoundPageDefault } from './NotFoundPage.render'

jest.mock('@apollo/react-hooks', () => {
  return {
    useQuery: () => {
      return {
        data: {
          pages: {
            pages: [{ id: 'not-found', name: 'some-name' }],
          },
        },
      }
    },
  }
})

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<NotFoundPage />', () => {
  describe('Snaphot', () => {
    test('must match notFoundPageDefault', () => {
      expect(global.renderToJSON(notFoundPageDefault)).toMatchSnapshot()
    })
  })
})
