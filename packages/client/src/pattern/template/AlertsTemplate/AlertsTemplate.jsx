import React from 'react'
import { Link } from 'react-router-dom'
import { propTypes } from './AlertsTemplate.props'
import { startPagePath } from '../../../route/path'
import { UnderConstruction } from '../../atom/info/UnderConstruction'

export const AlertsTemplate = ({ page }) => (
  <div>
    <h2>{page.name}</h2>
    <UnderConstruction />
    <Link to={startPagePath}> Back to Home Page</Link>
  </div>
)

AlertsTemplate.propTypes = propTypes
