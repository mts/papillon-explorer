import React from 'react'
import { Label, variants } from 'papillon-labels'

export const StateLabels = () => {
  const {
    state,
    stateDefault,
    stateGreen,
    statePurple,
    stateRed,
    stateDefaultSmall,
    stateGreenSmall,
    statePurpleSmall,
    stateRedSmall,
    stateOpen,
    stateClosed,
    stateMerged,
  } = variants

  return (
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
        state
      </h3>
      <div className="pl-6">
        <Label variant={state} className="text-yellow bg-white">
          papillon state label
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
        <Label variant={stateDefault}>papillon state label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        green
      </h3>
      <div className="pl-6">
        <Label variant={stateGreen}>papillon state label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        purple
      </h3>
      <div className="pl-6">
        <Label variant={statePurple}>papillon state label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        red
      </h3>
      <div className="pl-6">
        <Label variant={stateRed}>papillon state label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        default small
      </h3>
      <div className="pl-6">
        <Label variant={stateDefaultSmall}>papillon state label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        green small
      </h3>
      <div className="pl-6">
        <Label variant={stateGreenSmall}>papillon state label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        purple small
      </h3>
      <div className="pl-6">
        <Label variant={statePurpleSmall}>papillon state label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        red small
      </h3>
      <div className="pl-6">
        <Label variant={stateRedSmall}>papillon state label</Label>
      </div>

      <h3 className="pl-2">
        <span role="img" aria-label="moyai">
          {' '}
          🐝{' '}
        </span>
        open
      </h3>
      <div className="pl-6">
        <Label variant={stateOpen} icon="git-pull-request">
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
        <Label variant={stateClosed} icon="git-pull-request">
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
        <Label variant={stateMerged} icon="git-merge">
          Merged
        </Label>
      </div>
    </div>
  )
}
