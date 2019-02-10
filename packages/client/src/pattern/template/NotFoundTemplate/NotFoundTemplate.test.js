import React from 'react'
import notFoundTemplateDefault from './NotFoundTemplate.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<NotFoundTemplate />', () => {
  describe('Snaphot', () => {
    test('must match notFoundTemplateDefault', () => {
      expect(global.renderToJSON(notFoundTemplateDefault)).toMatchSnapshot()
    })
  })
})
