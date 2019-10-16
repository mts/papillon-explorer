import React from 'react'

const LazyStartPage = React.lazy(() => import('./StartPage'))

export const AsyncStartPage = () => (
  <React.Suspense fallback={null}>
    <LazyStartPage />
  </React.Suspense>
)
