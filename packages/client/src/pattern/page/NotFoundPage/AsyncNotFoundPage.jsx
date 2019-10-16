import React from 'react'

const LazyNotFoundPage = React.lazy(() => import('./NotFoundPage'))

export const AsyncNotFoundPage = () => (
  <React.Suspense fallback={null}>
    <LazyNotFoundPage />
  </React.Suspense>
)
