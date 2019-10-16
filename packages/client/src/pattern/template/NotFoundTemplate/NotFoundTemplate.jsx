import React from 'react'
import { Link } from 'react-router-dom'
import { propTypes } from './NotFoundTemplate.props'
import { startPagePath } from '../../../route/path'
import { NoMatch } from '../../atom/info/NoMatch'

export const NotFoundTemplate = ({ page, location }) => (
  <div>
    <h2>{page.name}</h2>
    <NoMatch location={location} />
    <Link to={startPagePath}> Back to Home Page</Link>
  </div>
)

NotFoundTemplate.propTypes = propTypes
