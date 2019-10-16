import React from 'react'
import { blankslatePageDefault } from './BlankslatePage.render'

jest.mock('@apollo/react-hooks', () => {
  return {
    useQuery: () => {
      return {
        data: {
          pages: {
            pages: [{ id: 'blankslate', name: 'some-name' }],
          },
        },
      }
    },
  }
})

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<BlankslatePage />', () => {
  describe('Snaphot', () => {
    test('must match blankslatePageDefault', () => {
      expect(global.renderToJSON(blankslatePageDefault)).toMatchSnapshot()
    })
  })
})
