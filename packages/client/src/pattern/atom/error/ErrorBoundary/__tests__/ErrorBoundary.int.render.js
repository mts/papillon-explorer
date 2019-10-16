import React from 'react'
import { ErrorBoundary } from '../ErrorBoundary'

const SomeComponent = () => <div />

export const errorBoundaryDefault = (
  <ErrorBoundary>
    <SomeComponent />
  </ErrorBoundary>
)
