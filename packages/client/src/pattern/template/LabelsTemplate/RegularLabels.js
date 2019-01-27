import React from 'react'
import Label from 'papillon-labels'

const RegularLabels = () => (
  <div>
    <h2 className="p-2">
      <span role="img" aria-label="moyai">
        {' '}
        🎨{' '}
      </span>
      Regular Labels
    </h2>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      white on blue
    </h3>
    <div className="pl-6">
      <Label variant="label-white-on-blue">papillon regular label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      white on dark gray
    </h3>
    <div className="pl-6">
      <Label variant="label-white-on-dark-gray">papillon regular label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      white on green
    </h3>
    <div className="pl-6">
      <Label variant="label-white-on-green">papillon regular label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      white on red
    </h3>
    <div className="pl-6">
      <Label variant="label-white-on-red">papillon regular label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      white on yellow
    </h3>
    <div className="pl-6">
      <Label variant="label-white-on-yellow">papillon regular label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      white on purple
    </h3>
    <div className="pl-6">
      <Label variant="label-white-on-purple">papillon regular label</Label>
    </div>
  </div>
)

export default RegularLabels
