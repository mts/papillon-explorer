import React from 'react'
import { labelsPageDefault } from './LabelsPage.render'

jest.mock('@apollo/react-hooks', () => {
  return {
    useQuery: () => {
      return {
        data: {
          pages: {
            pages: [{ id: 'labels', name: 'some-name' }],
          },
        },
      }
    },
  }
})

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<LabelsPage />', () => {
  describe('Snaphot', () => {
    test('must match labelsPageDefault', () => {
      expect(global.renderToJSON(labelsPageDefault)).toMatchSnapshot()
    })
  })
})
