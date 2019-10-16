import React from 'react'
import { Label, variants } from 'papillon-labels'

export const RegularLabels = () => {
  const {
    label,
    labelWhiteOnBlue,
    labelWhiteOnDarkGray,
    labelWhiteOnDarkGreen,
    labelWhiteOnRed,
    labelWhiteOnYellow,
    labelWhiteOnPurple,
  } = variants

  return (
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
        label
      </h3>
      <div className="pl-6">
        <Label variant={label} className="text-gray">
          papillon regular label
        </Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        white on blue
      </h3>
      <div className="pl-6">
        <Label variant={labelWhiteOnBlue}>papillon regular label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        white on dark gray
      </h3>
      <div className="pl-6">
        <Label variant={labelWhiteOnDarkGray}>papillon regular label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        white on green
      </h3>
      <div className="pl-6">
        <Label variant={labelWhiteOnDarkGreen}>papillon regular label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        white on red
      </h3>
      <div className="pl-6">
        <Label variant={labelWhiteOnRed}>papillon regular label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        white on yellow
      </h3>
      <div className="pl-6">
        <Label variant={labelWhiteOnYellow}>papillon regular label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        white on purple
      </h3>
      <div className="pl-6">
        <Label variant={labelWhiteOnPurple}>papillon regular label</Label>
      </div>
    </div>
  )
}
