import React from 'react'
import { NoMatch } from './NoMatch'

const props = {
  location: {
    pathname: 'some-path-name',
  },
}

export const noMatchDefault = <NoMatch location={props.location} />
