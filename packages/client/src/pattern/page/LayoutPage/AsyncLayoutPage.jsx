import React from 'react'

const LazyLayoutPage = React.lazy(() => import('./LayoutPage'))

const AsyncLayoutPage = () => (
  <React.Suspense fallback={null}>
    <LazyLayoutPage />
  </React.Suspense>
)

export default AsyncLayoutPage
