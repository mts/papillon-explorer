import React from 'react'

const LazyBlankslatePage = React.lazy(() => import('./BlankslatePage'))

const AsyncBlankslatePage = () => (
  <React.Suspense fallback={null}>
    <LazyBlankslatePage />
  </React.Suspense>
)

export default AsyncBlankslatePage
