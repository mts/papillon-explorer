import React from 'react'

const LazyLayoutPage = React.lazy(() => import('./LayoutPage'))

export const AsyncLayoutPage = () => (
  <React.Suspense fallback={null}>
    <LazyLayoutPage />
  </React.Suspense>
)
