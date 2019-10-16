import React from 'react'
import { AsyncNotFoundPage } from './AsyncNotFoundPage'
import { NotFoundPage } from './NotFoundPage'

const props = {
  location: {
    pathname: 'some-path-name',
  },
}

export const notFoundPageAsync = <AsyncNotFoundPage />
export const notFoundPageDefault = <NotFoundPage location={props.location} />
