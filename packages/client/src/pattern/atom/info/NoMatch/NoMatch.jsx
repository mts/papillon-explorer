import React from 'react'
import { propTypes } from './NoMatch.props'

export const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location?.pathname}</code>
    </h3>
  </div>
)

NoMatch.propTypes = propTypes
