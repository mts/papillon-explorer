import React from 'react'
import { layoutPageDefault } from './LayoutPage.render'

jest.mock('@apollo/react-hooks', () => {
  return {
    useQuery: () => {
      return {
        data: {
          pages: {
            pages: [{ id: 'layout', name: 'some-name' }],
          },
        },
      }
    },
  }
})

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<LayoutPage />', () => {
  describe('Snaphot', () => {
    test('must match layoutPageDefault', () => {
      expect(global.renderToJSON(layoutPageDefault)).toMatchSnapshot()
    })
  })
})
