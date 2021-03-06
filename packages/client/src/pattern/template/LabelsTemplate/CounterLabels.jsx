import React from 'react'
import { Label, variants } from 'papillon-labels'

export const CounterLabels = () => {
  const { counter, counterDefault, counterGray, counterGrayLight } = variants

  return (
    <div>
      <h2 className="p-2">
        <span role="img" aria-label="moyai">
          {' '}
          🎨{' '}
        </span>
        Counter Labels
      </h2>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        counter
      </h3>
      <div className="pl-6">
        <Label variant={counter} className="text-blue">
          11
        </Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        default
      </h3>
      <div className="pl-6">
        <Label variant={counterDefault}>16</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        gray
      </h3>
      <div className="pl-6">
        <Label variant={counterGray}>32</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        gray light
      </h3>
      <div className="pl-6">
        <Label variant={counterGrayLight}>32</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        in tabs
      </h3>
      <div className="pl-6">
        <div className="tabnav">
          <nav className="tabnav-tabs" aria-label="Foo bar">
            <a href="#url" className="tabnav-tab selected" aria-current="page">
              Foo tab
              <Label variant="counter-default">23</Label>
            </a>
            <a href="#url" className="tabnav-tab ml-1">
              Bar tab
            </a>
          </nav>
        </div>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        in box headers
      </h3>
      <div className="pl-6">
        <div className="Box">
          <div className="Box-header">
            <h3 className="Box-title">
              Box title
              <Label variant="counter-default">3</Label>
            </h3>
          </div>
          <ul>
            <li className="Box-row">Box row one</li>
            <li className="Box-row">Box row two</li>
            <li className="Box-row">Box row three</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
