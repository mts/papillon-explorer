import React from 'react'
import { NotFoundPage } from './NotFoundPage'

const props = {
  location: {
    pathname: 'some-path-name',
  },
}

export const notFoundPageDefault = <NotFoundPage location={props.location} />
