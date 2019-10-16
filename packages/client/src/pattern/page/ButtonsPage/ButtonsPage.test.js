import React from 'react'
import { buttonsPageDefault } from './ButtonsPage.render'

jest.mock('@apollo/react-hooks', () => {
  return {
    useQuery: () => {
      return {
        data: {
          pages: {
            pages: [{ id: 'buttons', name: 'some-name' }],
          },
        },
      }
    },
  }
})

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<ButtonsPage />', () => {
  describe('Snaphot', () => {
    test('must match buttonsPageDefault', () => {
      expect(global.renderToJSON(buttonsPageDefault)).toMatchSnapshot()
    })
  })
})
