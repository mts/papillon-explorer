import React from 'react'
import ErrorBoundary from './ErrorBoundary'

const SomeComponent = () => <div />

const errorBoundaryDefault = (
  <ErrorBoundary>
    <SomeComponent />
  </ErrorBoundary>
)

export default errorBoundaryDefault
