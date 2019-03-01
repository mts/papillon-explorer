import React from 'react'
import { object } from 'prop-types'

const NoMatch = ({ location }) => (
  <React.Fragment>
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  </React.Fragment>
)

NoMatch.propTypes = {
  location: object.isRequired,
}

export default NoMatch
