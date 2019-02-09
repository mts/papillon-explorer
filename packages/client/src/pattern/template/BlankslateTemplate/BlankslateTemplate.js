import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { routeShape } from '../../../route/shape'

const BlankslateTemplate = ({ page, startPageRoute }) => (
  <div>
    <h2>{page.name}</h2>
    <div>
      Under construction{' '}
      <span role="img" aria-label="emoji">
        🙂
      </span>
      <Link to={startPageRoute.path}> Back to Home Page</Link>
    </div>
  </div>
)

BlankslateTemplate.propTypes = {
  page: object.isRequired,
  startPageRoute: routeShape.isRequired,
}

export default BlankslateTemplate
