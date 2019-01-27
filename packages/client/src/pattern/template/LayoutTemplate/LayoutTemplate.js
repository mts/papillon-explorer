import React from 'react'
import { object, string } from 'prop-types'
import { Link } from 'react-router-dom'

const LayoutTemplate = ({ page, startPageRoute }) => (
  <div>
    <h2>{page.name}</h2>
    <div>
      Under construction{' '}
      <span role="img" aria-label="emoji">
        🙂
      </span>
      <Link to={startPageRoute}> Back to Home Page</Link>
    </div>
  </div>
)

LayoutTemplate.propTypes = {
  page: object.isRequired,
  startPageRoute: string.isRequired,
}

export default LayoutTemplate
