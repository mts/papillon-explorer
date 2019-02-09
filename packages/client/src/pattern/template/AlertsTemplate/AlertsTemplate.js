import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { startPagePath } from '../../../route/path'
import UnderConstruction from '../../atom/info/UnderConstruction'

const AlertsTemplate = ({ page }) => (
  <div>
    <h2>{page.name}</h2>
    <UnderConstruction />
    <Link to={startPagePath}> Back to Home Page</Link>
  </div>
)

AlertsTemplate.propTypes = {
  page: object.isRequired,
}

export default AlertsTemplate
