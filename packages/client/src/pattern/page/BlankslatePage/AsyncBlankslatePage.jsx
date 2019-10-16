import React from 'react'

const LazyBlankslatePage = React.lazy(() => import('./BlankslatePage'))

export const AsyncBlankslatePage = () => (
  <React.Suspense fallback={null}>
    <LazyBlankslatePage />
  </React.Suspense>
)
