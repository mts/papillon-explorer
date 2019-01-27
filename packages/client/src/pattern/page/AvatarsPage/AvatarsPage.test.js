import React from 'react'
import avatarsPageDefault from './AvatarsPage.render'

jest.mock('react-apollo', () => {
  return {
    Query: () => <div />,
  }
})

describe('<AvatarsPage />', () => {
  describe('Snaphot', () => {
    test('must match avatarsPageDefault', () => {
      expect(global.renderToJSON(avatarsPageDefault)).toMatchSnapshot()
    })
  })
})
