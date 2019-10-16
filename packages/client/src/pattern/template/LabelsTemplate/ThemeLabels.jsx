import React from 'react'
import { Label, variants } from 'papillon-labels'

export const ThemeLabels = () => {
  const { theme, themeGray, themeDarkGray, themeOrange, themeOutline, themeOutlineGreen } = variants

  return (
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
        theme
      </h3>
      <div className="pl-6">
        <Label variant={theme} className="text-pink">
          papillon theme label
        </Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        gray
      </h3>
      <div className="pl-6">
        <Label variant={themeGray}>papillon theme label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        dark gray
      </h3>
      <div className="pl-6">
        <Label variant={themeDarkGray}>papillon theme label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        orange
      </h3>
      <div className="pl-6">
        <Label variant={themeOrange}>papillon theme label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        outline
      </h3>
      <div className="pl-6">
        <Label variant={themeOutline}>papillon theme label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        outline green
      </h3>
      <div className="pl-6">
        <Label variant={themeOutlineGreen}>papillon theme label</Label>
      </div>
    </div>
  )
}
