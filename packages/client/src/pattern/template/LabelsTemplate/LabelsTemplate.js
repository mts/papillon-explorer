import React from 'react'
import { object, string } from 'prop-types'
import { Link } from 'react-router-dom'
import RegularLabels from './RegularLabels'
import ThemeLabels from './ThemeLabels'
import StateLabels from './StateLabels'
import CounterLabels from './CounterLabels'

const LabelsTemplate = ({ data, startPageRoute }) => {
  if (data.pages && data.pages.pages) {
    return (
      <div>
        <h1 align="center" className="p-4">
          <span role="img" aria-label="emoji">
            🎨
          </span>{' '}
          {data.pages.pages.find(page => page.id === 'labels').name}
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
          <Link to={startPageRoute}> Back to Home Page</Link>
        </div>
      </div>
    )
  } else {
    return null
  }
}

LabelsTemplate.propTypes = {
  data: object.isRequired,
  startPageRoute: string.isRequired,
}

export default LabelsTemplate
