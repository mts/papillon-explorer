import React from 'react'
import { breadcrumbPageDefault } from './BreadcrumbPage.render'

jest.mock('@apollo/react-hooks', () => {
  return {
    useQuery: () => {
      return {
        data: {
          pages: {
            pages: [{ id: 'breadcrumb', name: 'some-name' }],
          },
        },
      }
    },
  }
})

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<BreadcrumbPage />', () => {
  describe('Snaphot', () => {
    test('must match breadcrumbPageDefault', () => {
      expect(global.renderToJSON(breadcrumbPageDefault)).toMatchSnapshot()
    })
  })
})
