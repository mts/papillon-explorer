import React from 'react'
import Label from 'papillon-labels'

const ThemeLabels = () => (
  <div>
    <h2 className="p-2">
      <span role="img" aria-label="moyai">
        {' '}
        🎨{' '}
      </span>
      Theme Labels
    </h2>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      gray
    </h3>
    <div className="pl-6">
      <Label variant="theme-gray">papillon theme label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      dark gray
    </h3>
    <div className="pl-6">
      <Label variant="theme-dark-gray">papillon theme label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      orange
    </h3>
    <div className="pl-6">
      <Label variant="theme-orange">papillon theme label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      outline
    </h3>
    <div className="pl-6">
      <Label variant="theme-outline">papillon theme label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      outline green
    </h3>
    <div className="pl-6">
      <Label variant="theme-outline-green">papillon theme label</Label>
    </div>
  </div>
)

export default ThemeLabels
