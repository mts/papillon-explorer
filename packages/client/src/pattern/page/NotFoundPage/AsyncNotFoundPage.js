import React from 'react'

const LazyNotFoundPage = React.lazy(() => import('./NotFoundPage'))

const AsyncNotFoundPage = () => (
  <React.Suspense fallback={null}>
    <LazyNotFoundPage />
  </React.Suspense>
)

export default AsyncNotFoundPage
