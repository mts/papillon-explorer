import React from 'react'
import { object, string } from 'prop-types'
import { Link } from 'react-router-dom'

const BreadcrumbTemplate = ({ data, startPageRoute }) => {
  if (data.pages && data.pages.pages) {
    return (
      <div>
        <h2>{data.pages.pages.find(page => page.id === 'breadcrumb').name}</h2>
        <div>
          Under construction{' '}
          <span role="img" aria-label="emoji">
            🙂
          </span>
          <Link to={startPageRoute}> Back to Home Page</Link>
        </div>
      </div>
    )
  } else {
    return null
  }
}

BreadcrumbTemplate.propTypes = {
  data: object.isRequired,
  startPageRoute: string.isRequired,
}

export default BreadcrumbTemplate
