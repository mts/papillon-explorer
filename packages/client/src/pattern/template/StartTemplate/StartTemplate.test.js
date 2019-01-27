import React from 'react'
import startTemplateDefault from './StartTemplate.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<StartTemplate />', () => {
  describe('Snaphot', () => {
    test('must match startTemplateDefault', () => {
      expect(global.renderToJSON(startTemplateDefault)).toMatchSnapshot()
    })
  })
})
