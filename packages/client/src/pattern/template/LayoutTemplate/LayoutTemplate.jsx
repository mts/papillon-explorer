import React from 'react'
import { Link } from 'react-router-dom'
import { propTypes } from './LayoutTemplate.props'
import { startPagePath } from '../../../route/path'

export const LayoutTemplate = ({ page }) => (
  <div>
    <h2>{page.name}</h2>
    <div>
      Under construction{' '}
      <span role="img" aria-label="emoji">
        🙂
      </span>
      <Link to={startPagePath}> Back to Home Page</Link>
    </div>
  </div>
)

LayoutTemplate.propTypes = propTypes
