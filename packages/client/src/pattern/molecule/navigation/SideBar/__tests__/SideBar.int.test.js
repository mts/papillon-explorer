import React from 'react'
import { sideBarDefault } from './SideBar.int.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<SideBar />', () => {
  describe('Snaphot', () => {
    test('must match sideBarDefault', () => {
      expect(global.renderToJSON(sideBarDefault)).toMatchSnapshot()
    })
  })
})
