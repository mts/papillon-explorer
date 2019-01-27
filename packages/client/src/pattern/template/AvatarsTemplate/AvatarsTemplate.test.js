import React from 'react'
import avatarsTemplateDefault from './AvatarsTemplate.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<AvatarsTemplate />', () => {
  describe('Snaphot', () => {
    test('must match avatarsTemplateDefault', () => {
      expect(global.renderToJSON(avatarsTemplateDefault)).toMatchSnapshot()
    })
  })
})
