import React from 'react'
import { labelsPageAsync, labelsPageDefault } from './LabelsPage.render'

jest.mock('@apollo/react-hooks', () => ({ useQuery: () => {} }))
jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

const apolloReactHooksMockObject = require('@apollo/react-hooks')

describe('<LabelsPage />', () => {
  const pagesDataObject = {
    data: {
      pages: {
        pages: [{ id: 'labels', name: 'some-name' }],
      },
    },
  }

  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match labelsPageAsync', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue(pagesDataObject)
      expect(global.renderToJSON(labelsPageAsync)).toMatchSnapshot()
    })

    test('must match labelsPageDefault', () => {
      expect(global.renderToJSON(labelsPageDefault)).toMatchSnapshot()
    })

    test('must match labelsPageNull', () => {
      jest.spyOn(apolloReactHooksMockObject, 'useQuery').mockReturnValue({})
      expect(global.renderToJSON(labelsPageDefault)).toMatchSnapshot()
    })
  })
})
