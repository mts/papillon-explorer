import React from 'react'
import Label from 'papillon-labels'

const StateLabels = () => (
  <div>
    <h2 className="p-2">
      <span role="img" aria-label="moyai">
        {' '}
        🎨{' '}
      </span>
      State Labels
    </h2>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      default
    </h3>
    <div className="pl-6">
      <Label variant="state-default">papillon state label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      green
    </h3>
    <div className="pl-6">
      <Label variant="state-green">papillon state label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      purple
    </h3>
    <div className="pl-6">
      <Label variant="state-purple">papillon state label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      red
    </h3>
    <div className="pl-6">
      <Label variant="state-red">papillon state label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      default small
    </h3>
    <div className="pl-6">
      <Label variant="state-default-small">papillon state label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      green small
    </h3>
    <div className="pl-6">
      <Label variant="state-green-small">papillon state label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      purple small
    </h3>
    <div className="pl-6">
      <Label variant="state-purple-small">papillon state label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      red small
    </h3>
    <div className="pl-6">
      <Label variant="state-red-small">papillon state label</Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      open
    </h3>
    <div className="pl-6">
      <Label variant="state-open" icon="git-pull-request">
        Open
      </Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      closed
    </h3>
    <div className="pl-6">
      <Label variant="state-closed" icon="git-pull-request">
        Closed
      </Label>
    </div>

    <h3 className="pl-2">
      <span role="img" aria-label="moyai">
        {' '}
        🐝{' '}
      </span>
      merged
    </h3>
    <div className="pl-6">
      <Label variant="state-merged" icon="git-merge">
        Merged
      </Label>
    </div>
  </div>
)

export default StateLabels
