import React from 'react'
import { startPageDefault } from './StartPage.render'

jest.mock('@apollo/react-hooks', () => {
  return {
    useQuery: () => {
      return {
        data: {
          pages: {
            pages: [{ id: 'start', name: 'some-name' }],
          },
        },
      }
    },
  }
})

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<StartPage />', () => {
  describe('Snaphot', () => {
    test('must match startPageDefault', () => {
      expect(global.renderToJSON(startPageDefault)).toMatchSnapshot()
    })
  })
})
