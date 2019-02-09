import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { routeShape } from '../../../route/shape'
import RegularLabels from './RegularLabels'
import ThemeLabels from './ThemeLabels'
import StateLabels from './StateLabels'
import CounterLabels from './CounterLabels'

const LabelsTemplate = ({ page, startPageRoute }) => (
  <div>
    <h1 align="center" className="p-4">
      <span role="img" aria-label="emoji">
        🎨
      </span>{' '}
      {page.name}
    </h1>
    <div className="d-flex flex-justify-around">
      <div className="col-3">
        <RegularLabels />
      </div>
      <div className="col-3">
        <ThemeLabels />
      </div>
      <div className="col-3">
        <StateLabels />
      </div>
      <div className="col-3">
        <CounterLabels />
      </div>
    </div>
    <div className="p-4">
      <Link to={startPageRoute.path}> Back to Home Page</Link>
    </div>
  </div>
)

LabelsTemplate.propTypes = {
  page: object.isRequired,
  startPageRoute: routeShape.isRequired,
}

export default LabelsTemplate
