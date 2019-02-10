import React from 'react'
import NoMatch from './NoMatch'

const props = {
  location: {
    pathname: 'some-path-name',
  },
}

const noMatchDefault = <NoMatch {...props} />

export default noMatchDefault
