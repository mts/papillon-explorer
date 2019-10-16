import React from 'react'
import { object } from 'prop-types'

export const NoMatch = ({ location }) => (
  <>
    <div>
      <h3>
        No match for <code>{location?.pathname}</code>
      </h3>
    </div>
  </>
)

NoMatch.propTypes = {
  location: object.isRequired,
}
