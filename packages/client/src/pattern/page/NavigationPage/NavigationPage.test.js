import React from 'react'
import { navigationPageDefault } from './NavigationPage.render'

jest.mock('@apollo/react-hooks', () => {
  return {
    useQuery: () => {
      return {
        data: {
          pages: {
            pages: [{ id: 'navigation', name: 'some-name' }],
          },
        },
      }
    },
  }
})

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<NavigationPage />', () => {
  describe('Snaphot', () => {
    test('must match navigationPageDefault', () => {
      expect(global.renderToJSON(navigationPageDefault)).toMatchSnapshot()
    })
  })
})
