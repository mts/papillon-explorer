import React from 'react'
import NotFoundPage from './NotFoundPage'

const props = {
  location: {
    pathname: 'some-path-name',
  },
}

const notFoundPageDefault = <NotFoundPage {...props} />

export default notFoundPageDefault
